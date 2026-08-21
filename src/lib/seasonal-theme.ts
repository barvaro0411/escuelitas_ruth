export type SeasonalMode = "auto" | "on" | "off";

type MonthDay = {
  month: number;
  day: number;
};

const envMode = process.env.NEXT_PUBLIC_FIESTAS_PATRIAS_MODE;

function getFiestasPatriasMode(): SeasonalMode {
  if (envMode === "on" || envMode === "off" || envMode === "auto") {
    return envMode;
  }

  return "auto";
}

export const seasonalTheme = {
  fiestasPatrias: {
    /** Interruptor maestro. Cámbialo a false para deshabilitar el modo por completo. */
    enabled: true,
    /** "auto" usa las fechas; "on" y "off" fuerzan el estado manualmente. */
    mode: getFiestasPatriasMode(),
    timeZone: "America/Santiago",
    start: { month: 8, day: 21 },
    end: { month: 9, day: 30 },
  },
} as const;

function toComparableDate({ month, day }: MonthDay) {
  return month * 100 + day;
}

function getDateInTimeZone(date: Date, timeZone: string): MonthDay {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    month: "numeric",
    day: "numeric",
  }).formatToParts(date);

  const month = Number(parts.find((part) => part.type === "month")?.value);
  const day = Number(parts.find((part) => part.type === "day")?.value);

  return { month, day };
}

export function isFiestasPatriasActive(date = new Date()) {
  const config = seasonalTheme.fiestasPatrias;

  if (!config.enabled || config.mode === "off") return false;
  if (config.mode === "on") return true;

  const current = toComparableDate(getDateInTimeZone(date, config.timeZone));
  const start = toComparableDate(config.start);
  const end = toComparableDate(config.end);

  if (start <= end) return current >= start && current <= end;

  // También permite rangos que atraviesan el cambio de año.
  return current >= start || current <= end;
}

export function getSeasonalThemeBootstrapScript() {
  const config = seasonalTheme.fiestasPatrias;
  const publicConfig = JSON.stringify({
    enabled: config.enabled,
    mode: config.mode,
    timeZone: config.timeZone,
    start: config.start,
    end: config.end,
  });

  return `(() => {
    const config = ${publicConfig};
    const update = () => {
      let mode = config.mode;
      try {
        const queryMode = new URLSearchParams(window.location.search).get("fiestas");
        if (queryMode === "on" || queryMode === "off") {
          window.sessionStorage.setItem("fiestasPatriasPreview", queryMode);
        } else if (queryMode === "auto") {
          window.sessionStorage.removeItem("fiestasPatriasPreview");
        }
        mode = window.sessionStorage.getItem("fiestasPatriasPreview") || mode;
      } catch {
        // El modo automático continúa funcionando si el almacenamiento está bloqueado.
      }

      let active = config.enabled && mode !== "off";
      if (active && mode === "auto") {
        const parts = new Intl.DateTimeFormat("en-CA", {
          timeZone: config.timeZone,
          month: "numeric",
          day: "numeric"
        }).formatToParts(new Date());
        const month = Number(parts.find((part) => part.type === "month")?.value);
        const day = Number(parts.find((part) => part.type === "day")?.value);
        const current = month * 100 + day;
        const start = config.start.month * 100 + config.start.day;
        const end = config.end.month * 100 + config.end.day;
        active = start <= end
          ? current >= start && current <= end
          : current >= start || current <= end;
      }
      document.documentElement.dataset.fiestasPatrias = String(active);
    };
    update();
    window.setInterval(update, 15 * 60 * 1000);
    document.addEventListener("visibilitychange", update);
  })();`;
}
