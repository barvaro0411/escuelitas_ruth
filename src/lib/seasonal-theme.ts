import {
  seasonalThemeConfig,
  seasonalThemeIds,
  type SeasonalThemeDefinition,
  type SeasonalThemeId,
  type SeasonalThemeMode,
} from "@/config/seasonal-themes";

type MonthDay = { month: number; day: number };

export const seasonalTheme = {
  activeTheme: seasonalThemeConfig.mode,
  automatic: seasonalThemeConfig.mode === "auto",
  ...seasonalThemeConfig,
};

function toComparableDate({ month, day }: MonthDay) {
  return month * 100 + day;
}

function getDateInTimeZone(date: Date, timeZone: string): MonthDay {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    month: "numeric",
    day: "numeric",
  }).formatToParts(date);

  return {
    month: Number(parts.find((part) => part.type === "month")?.value),
    day: Number(parts.find((part) => part.type === "day")?.value),
  };
}

function isDateInsideTheme(date: MonthDay, theme: SeasonalThemeDefinition) {
  const current = toComparableDate(date);
  const start = toComparableDate(theme.start);
  const end = toComparableDate(theme.end);
  return start <= end ? current >= start && current <= end : current >= start || current <= end;
}

export function getActiveSeasonalTheme(date = new Date()): SeasonalThemeId | null {
  const config = seasonalThemeConfig;
  if (!config.enabled || config.mode === "off") return null;

  if (config.mode !== "auto") return config.mode;

  const localDate = getDateInTimeZone(date, config.timeZone);
  const active = [...config.themes]
    .filter((theme) => theme.enabled && isDateInsideTheme(localDate, theme))
    .sort((a, b) => b.priority - a.priority)[0];

  return active?.id ?? null;
}

export function isFiestasPatriasActive(date = new Date()) {
  return getActiveSeasonalTheme(date) === "fiestas-patrias";
}

export function getSeasonalThemeBootstrapScript() {
  const publicConfig = JSON.stringify(seasonalThemeConfig);
  const validThemes = JSON.stringify(seasonalThemeIds);

  return `(() => {
    const config = ${publicConfig};
    const validThemes = ${validThemes};
    const isValidMode = (value) => value === "auto" || value === "off" || validThemes.includes(value);
    const update = () => {
      let mode = config.mode;
      try {
        const params = new URLSearchParams(window.location.search);
        const requestedTheme = params.get("theme");
        const legacyFiestas = params.get("fiestas");
        const preview = isValidMode(requestedTheme)
          ? requestedTheme
          : legacyFiestas === "on"
            ? "fiestas-patrias"
            : legacyFiestas === "off" || legacyFiestas === "auto"
              ? legacyFiestas
              : null;

        if (preview === "auto") {
          window.sessionStorage.removeItem("seasonalThemePreview");
        } else if (preview) {
          window.sessionStorage.setItem("seasonalThemePreview", preview);
        }

        const storedMode = window.sessionStorage.getItem("seasonalThemePreview");
        if (storedMode && isValidMode(storedMode)) mode = storedMode;
      } catch {
        // El modo automático continúa si el almacenamiento está bloqueado.
      }

      let activeTheme = null;
      if (config.enabled && mode !== "off") {
        if (mode !== "auto") {
          activeTheme = mode;
        } else {
          const parts = new Intl.DateTimeFormat("en-CA", {
            timeZone: config.timeZone,
            month: "numeric",
            day: "numeric"
          }).formatToParts(new Date());
          const month = Number(parts.find((part) => part.type === "month")?.value);
          const day = Number(parts.find((part) => part.type === "day")?.value);
          const current = month * 100 + day;
          activeTheme = [...config.themes]
            .filter((theme) => {
              if (!theme.enabled) return false;
              const start = theme.start.month * 100 + theme.start.day;
              const end = theme.end.month * 100 + theme.end.day;
              return start <= end
                ? current >= start && current <= end
                : current >= start || current <= end;
            })
            .sort((a, b) => b.priority - a.priority)[0]?.id || null;
        }
      }

      document.documentElement.dataset.seasonalTheme = activeTheme || "none";
      document.documentElement.dataset.fiestasPatrias = String(activeTheme === "fiestas-patrias");
    };
    update();
    window.setInterval(update, 15 * 60 * 1000);
    document.addEventListener("visibilitychange", update);
  })();`;
}

export type { SeasonalThemeId, SeasonalThemeMode };
