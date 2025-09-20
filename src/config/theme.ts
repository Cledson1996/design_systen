import type { ThemeConfig } from "antd";

export const designSystemColors = {
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a",
  },

  primary: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22",
  },

  secondary: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554",
  },

  success: {
    50: "#ecfdf5",
    100: "#d1fae5",
    500: "#10b981",
    600: "#059669",
  },

  error: {
    50: "#fef2f2",
    100: "#fee2e2",
    500: "#ef4444",
    600: "#dc2626",
  },

  warning: {
    50: "#fffbeb",
    100: "#fef3c7",
    500: "#f59e0b",
    600: "#b45309",
  },

  info: {
    50: "#eff6ff",
    100: "#dbeafe",
    500: "#3b82f6",
    600: "#1e40af",
  },
};

const { neutral, primary, secondary, success, error, warning, info } =
  designSystemColors;

export const antdTheme: ThemeConfig = {
  token: {
    // Marca principal e estados
    colorPrimary: primary[600],
    colorSuccess: success[600],
    colorError: error[600],
    colorWarning: warning[600],
    colorInfo: info[600],

    // Base de UI
    colorBgBase: neutral[50],
    colorTextBase: neutral[900],
    colorBorder: neutral[200],
    colorBorderSecondary: neutral[300],

    // Links (usando o azul “secondary”)
    colorLink: secondary[600],
    colorLinkHover: secondary[700],
    colorLinkActive: secondary[800],

    // Containers
    colorBgContainer: "#ffffff",
    colorBgElevated: "#ffffff",

    // Pequenos fills / hovers
    colorFill: neutral[100],
    colorFillSecondary: neutral[100],

    // Tipografia / raio – ajuste se quiser
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    borderRadius: 8,
  },

  // Ajustes por componente (opcional, mas prático para casar com a paleta)
  components: {
    Button: {
      // geral
      borderRadius: 8,

      // === primary (verde) ===
      colorPrimary: primary[600],
      colorPrimaryHover: primary[700],
      colorPrimaryActive: primary[800],

      // === default (neutral) ===
      defaultBg: neutral[100],
      defaultColor: neutral[900],
      defaultHoverBg: neutral[200],
      defaultActiveBg: neutral[300],
      defaultBorderColor: "transparent",

      // === ghost ===
      defaultGhostColor: neutral[900],
      defaultGhostBorderColor: neutral[300],

      // === destructive (danger) ===
      colorError: error[600],
      colorErrorHover: error[600],
      colorErrorActive: error[600],
    },
    Input: {
      activeBorderColor: primary[600],
      hoverBorderColor: primary[600],
      colorBgContainer: neutral[50],
    },
    Select: {
      optionSelectedColor: neutral[900],
      optionSelectedBg: primary[50],
      controlOutline: primary[100],
    },
    Tag: {
      defaultBg: neutral[100],
      defaultColor: neutral[700],
    },
    Alert: {
      colorSuccess: success[600],
      colorWarning: warning[600],
      colorError: error[600],
      colorInfo: info[600],
    },
    Switch: { colorPrimary: primary[600] },
    Checkbox: { colorPrimary: primary[600] },
    Radio: { colorPrimary: primary[600] },
    Slider: { colorPrimary: primary[600] },
    Progress: { colorPrimary: primary[600] },
  },
};

export default antdTheme;
