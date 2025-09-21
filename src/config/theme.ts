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
    50: "#AAFFBE",
    100: "#8AF3A3",
    200: "#6ADD89",
    300: "#4AC771",
    400: "#2CBD62",
    500: "#009C46",
    600: "#008633",
    700: "#007122",
    800: "#005C12",
    900: "#004706",
  },

  secondary: {
    50: "#C7DDFA",
    100: "#A1C6F7",
    200: "#7BAFF4",
    300: "#5698F1",
    400: "#3081EE",
    500: "#136CE2",
    600: "#105ABC",
    700: "#0D4897",
    800: "#093671",
    900: "#072854",
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
      'var(--font-inter), Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    borderRadius: 8,
  },

  components: {
    Button: {
      borderRadius: 8,

      paddingContentHorizontalSM: 10,
      paddingContentVerticalSM: 10,
      controlHeightSM: 32,
      fontSize: 13,

      colorPrimary: primary[600],
      colorPrimaryHover: primary[700],
      colorPrimaryActive: primary[800],

      defaultBg: neutral[200],
      defaultColor: neutral[900],
      defaultHoverBg: neutral[400],
      defaultActiveBg: neutral[400],
      defaultBorderColor: "transparent",
      defaultHoverBorderColor: "transparent",
      defaultHoverColor: neutral[900],

      colorError: error[600],
      colorErrorHover: error[600],
      colorErrorActive: error[600],
    },
    Input: {
      // Cores de borda
      colorBorder: neutral[300],
      colorBorderSecondary: neutral[300],
      activeBorderColor: neutral[300],
      hoverBorderColor: neutral[300],
      colorErrorBorder: error[600],
      colorErrorBorderHover: error[600],

      // Cores de fundo
      colorBgContainer: "#ffffff",
      colorBgContainerDisabled: neutral[100],

      // Cores de texto
      colorText: neutral[900],
      colorTextPlaceholder: neutral[400],
      colorTextDisabled: neutral[400],

      // Tamanhos
      controlHeight: 40, // Regular
      controlHeightLG: 48, // Large
      controlHeightSM: 32, // Small
      controlHeightXS: 24, // Mini

      // Padding horizontal
      paddingInline: 12,
      paddingInlineLG: 16,
      paddingInlineSM: 8,

      // Font size
      fontSize: 14,
      fontSizeLG: 16,
      fontSizeSM: 12,

      // Border radius
      borderRadius: 8,
      borderRadiusLG: 8,
      borderRadiusSM: 6,
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

export const colorSecundaryButton = {
  defaultBg: secondary[700],
  defaultColor: neutral[50],
  defaultHoverColor: neutral[50],
  defaultHoverBg: secondary[800],
  defaultActiveBg: secondary[800],
  colorTextDisabled: designSystemColors.neutral[400],
  colorBgContainerDisabled: designSystemColors.neutral[200],
};

export default antdTheme;
