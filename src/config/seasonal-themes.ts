export const seasonalThemeIds = [
  "inicio-de-clases",
  "otono",
  "mes-de-la-familia",
  "dia-de-la-ninez",
  "fiestas-patrias",
  "primavera",
  "navidad",
] as const;

export type SeasonalThemeId = (typeof seasonalThemeIds)[number];
export type SeasonalThemeMode = "auto" | "off" | SeasonalThemeId;

export type SeasonalThemeDefinition = {
  id: SeasonalThemeId;
  label: string;
  enabled: boolean;
  start: { month: number; day: number };
  end: { month: number; day: number };
  priority: number;
};

const configuredMode = process.env.NEXT_PUBLIC_SEASONAL_THEME?.trim();
const legacyFiestasMode = process.env.NEXT_PUBLIC_FIESTAS_PATRIAS_MODE?.trim();

function resolveMode(): SeasonalThemeMode {
  if (configuredMode === "auto" || configuredMode === "off")
    return configuredMode;
  if (seasonalThemeIds.includes(configuredMode as SeasonalThemeId)) {
    return configuredMode as SeasonalThemeId;
  }

  // Compatibilidad con la configuración utilizada antes de crear el sistema general.
  if (legacyFiestasMode === "on") return "fiestas-patrias";
  if (legacyFiestasMode === "off") return "off";
  return "auto";
}

export const seasonalThemeConfig = {
  enabled: true,
  mode: resolveMode(),
  timeZone: "America/Santiago",
  themes: [
    {
      id: "inicio-de-clases",
      label: "Inicio de clases",
      enabled: false,
      start: { month: 2, day: 20 },
      end: { month: 3, day: 31 },
      priority: 10,
    },
    {
      id: "otono",
      label: "Otoño",
      enabled: false,
      start: { month: 4, day: 1 },
      end: { month: 4, day: 30 },
      priority: 10,
    },
    {
      id: "mes-de-la-familia",
      label: "Mes de la familia",
      enabled: false,
      start: { month: 5, day: 1 },
      end: { month: 5, day: 31 },
      priority: 10,
    },
    {
      id: "dia-de-la-ninez",
      label: "Día de la niñez",
      enabled: false,
      start: { month: 8, day: 1 },
      end: { month: 8, day: 20 },
      priority: 20,
    },
    {
      id: "fiestas-patrias",
      label: "Fiestas Patrias",
      enabled: true,
      start: { month: 8, day: 21 },
      end: { month: 9, day: 30 },
      priority: 100,
    },
    {
      id: "primavera",
      label: "Primavera",
      enabled: false,
      start: { month: 10, day: 1 },
      end: { month: 11, day: 15 },
      priority: 10,
    },
    {
      id: "navidad",
      label: "Navidad",
      enabled: false,
      start: { month: 12, day: 1 },
      end: { month: 12, day: 25 },
      priority: 50,
    },
  ] satisfies SeasonalThemeDefinition[],
} as const;
