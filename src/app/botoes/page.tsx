"use client";

import React from "react";
import { Button, Space, Typography, Card, ConfigProvider } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import { colorSecundaryButton, designSystemColors } from "@/config/theme";
import {
  MailOutlined,
  SendOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  LeftOutlined,
  RightOutlined,
  DollarOutlined,
  BellOutlined,
  HeartOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

// Configurações para botão Secondary
const ButtonSecondary = ({
  children,
  disabled = false,
}: {
  children: React.ReactNode;
  disabled?: boolean;
}) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            ...colorSecundaryButton,
            ...(disabled && {
              colorTextDisabled: designSystemColors.neutral[400],
              colorBgContainerDisabled: designSystemColors.neutral[200],
            }),
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

// Configurações para botão Outline
const ButtonOutline = ({
  children,
  disabled = false,
}: {
  children: React.ReactNode;
  disabled?: boolean;
}) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBg: "transparent",
            defaultColor: designSystemColors.neutral[900],
            defaultBorderColor: designSystemColors.neutral[300],
            defaultHoverBg: designSystemColors.neutral[50],
            defaultHoverBorderColor: designSystemColors.neutral[400],
            defaultHoverColor: designSystemColors.neutral[900],
            defaultActiveBg: designSystemColors.neutral[100],
            defaultActiveBorderColor: designSystemColors.neutral[400],
            ...(disabled && {
              colorTextDisabled: designSystemColors.neutral[400],
              colorBgContainerDisabled: "transparent",
              borderColorDisabled: designSystemColors.neutral[200],
            }),
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

// Configurações para botão Ghost
const ButtonGhost = ({
  children,
  disabled = false,
}: {
  children: React.ReactNode;
  disabled?: boolean;
}) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBg: "transparent",
            defaultColor: designSystemColors.neutral[700],
            defaultBorderColor: "transparent",
            defaultHoverBg: designSystemColors.neutral[100],
            defaultHoverBorderColor: "transparent",
            defaultHoverColor: designSystemColors.neutral[900],
            defaultActiveBg: designSystemColors.neutral[200],
            defaultActiveBorderColor: "transparent",
            ...(disabled && {
              colorTextDisabled: designSystemColors.neutral[400],
              colorBgContainerDisabled: "transparent",
            }),
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

const BotoesPage = () => {
  const buttonVariants = [
    { name: "Primary", component: "primary" },
    { name: "Secondary", component: "secondary" },
    { name: "Neutral", component: "neutral" },
    { name: "Outline", component: "outline" },
    { name: "Ghost", component: "ghost" },
    { name: "Destructive", component: "destructive" },
  ];

  const buttonStates = [
    { name: "Default", props: {} },
    { name: "Disabled", props: { disabled: true } },
    { name: "Focus", props: { autoFocus: true } },
    { name: "Loading", props: { loading: true } },
  ];

  const renderButton = (
    variant: string,
    state: { name: string; props: Record<string, unknown> },
    size: string = "middle"
  ) => {
    const buttonSize: SizeType =
      size === "middle" ? "middle" : (size as SizeType);
    const baseProps = {
      size: buttonSize,
      ...state.props,
    };

    switch (variant) {
      case "primary":
        return (
          <Button type="primary" {...baseProps}>
            Label
          </Button>
        );
      case "secondary":
        return (
          <ButtonSecondary {...baseProps}>
            <Button {...baseProps}>Label</Button>
          </ButtonSecondary>
        );
      case "neutral":
        return (
          <Button type="default" {...baseProps}>
            Label
          </Button>
        );
      case "outline":
        return (
          <ButtonOutline {...baseProps}>
            <Button {...baseProps}>Label</Button>
          </ButtonOutline>
        );
      case "ghost":
        return (
          <ButtonGhost {...baseProps}>
            <Button {...baseProps}>Label</Button>
          </ButtonGhost>
        );
      case "destructive":
        return (
          <Button type="primary" danger {...baseProps}>
            Label
          </Button>
        );
      default:
        return null;
    }
  };

  const renderIconButton = (
    variant: string,
    state: { name: string; props: Record<string, unknown> },
    size: string = "middle"
  ) => {
    const buttonSize: SizeType =
      size === "middle" ? "middle" : (size as SizeType);
    const baseProps = {
      size: buttonSize,
      shape: "circle" as const,
      icon: state.name === "Loading" ? <LoadingOutlined /> : <HeartOutlined />,
      ...state.props,
    };

    switch (variant) {
      case "primary":
        return <Button type="primary" {...baseProps} />;
      case "secondary":
        return (
          <ButtonSecondary {...baseProps}>
            <Button {...baseProps} />
          </ButtonSecondary>
        );
      case "neutral":
        return <Button type="default" {...baseProps} />;
      case "outline":
        return (
          <ButtonOutline {...baseProps}>
            <Button {...baseProps} />
          </ButtonOutline>
        );
      case "ghost":
        return (
          <ButtonGhost {...baseProps}>
            <Button {...baseProps} />
          </ButtonGhost>
        );
      case "destructive":
        return <Button type="primary" danger {...baseProps} />;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        padding: "24px",
        backgroundColor: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <style jsx global>{`
        .hover-active-demo:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .matrix-table {
          background: transparent;
          border-collapse: separate;
          border-spacing: 8px;
          width: 100%;
        }

        .matrix-header {
          color: #666666;
          font-size: 12px;
          text-align: center;
          padding: 8px;
          border-bottom: 1px dashed #ddd;
        }

        .matrix-row-header {
          color: #666666;
          font-size: 12px;
          text-align: left;
          padding: 8px;
          border-right: 1px dashed #ddd;
          vertical-align: middle;
        }

        .matrix-cell {
          text-align: center;
          padding: 8px;
          vertical-align: middle;
        }
      `}</style>

      <div style={{ marginBottom: "32px" }}>
        <Title level={1} style={{ color: "#262626", marginBottom: "8px" }}>
          JusCash Design System
        </Title>
        <Text style={{ color: "#666666" }}>
          Componentes de botões com todos os estados e variantes
        </Text>
      </div>

      {/* Matriz de Botões de Texto - Tamanho Médio */}
      <Card
        style={{
          marginBottom: "24px",
          backgroundColor: "#ffffff",
          border: "1px solid #e5e5e5",
        }}
      >
        <Title level={2} style={{ color: "#262626", marginBottom: "16px" }}>
          M - Botões de Texto (Tamanho Médio)
        </Title>

        <table className="matrix-table">
          <thead>
            <tr>
              <th className="matrix-header"></th>
              {buttonVariants.map((variant) => (
                <th key={variant.name} className="matrix-header">
                  {variant.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {buttonStates.map((state) => (
              <tr key={state.name}>
                <td className="matrix-row-header">{state.name}</td>
                {buttonVariants.map((variant) => (
                  <td
                    key={`${variant.component}-${state.name}`}
                    className="matrix-cell"
                  >
                    {renderButton(variant.component, state)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Matriz de Botões de Texto - Tamanho Grande */}
      <Card
        style={{
          marginBottom: "24px",
          backgroundColor: "#ffffff",
          border: "1px solid #e5e5e5",
        }}
      >
        <Title level={2} style={{ color: "#262626", marginBottom: "16px" }}>
          L - Botões de Texto (Tamanho Grande)
        </Title>

        <table className="matrix-table">
          <thead>
            <tr>
              <th className="matrix-header"></th>
              {buttonVariants.map((variant) => (
                <th key={variant.name} className="matrix-header">
                  {variant.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {buttonStates.map((state) => (
              <tr key={state.name}>
                <td className="matrix-row-header">{state.name}</td>
                {buttonVariants.map((variant) => (
                  <td
                    key={`${variant.component}-${state.name}`}
                    className="matrix-cell"
                  >
                    {renderButton(variant.component, state, "large")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Matriz de Botões de Texto - Tamanho Pequeno */}
      <Card
        style={{
          marginBottom: "24px",
          backgroundColor: "#ffffff",
          border: "1px solid #e5e5e5",
        }}
      >
        <Title level={2} style={{ color: "#262626", marginBottom: "16px" }}>
          S - Botões de Texto (Tamanho Pequeno)
        </Title>

        <table className="matrix-table">
          <thead>
            <tr>
              <th className="matrix-header"></th>
              {buttonVariants.map((variant) => (
                <th key={variant.name} className="matrix-header">
                  {variant.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {buttonStates.map((state) => (
              <tr key={state.name}>
                <td className="matrix-row-header">{state.name}</td>
                {buttonVariants.map((variant) => (
                  <td
                    key={`${variant.component}-${state.name}`}
                    className="matrix-cell"
                  >
                    {renderButton(variant.component, state, "small")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Matriz de Botões de Ícone - Tamanho Médio */}
      <Card
        style={{
          marginBottom: "24px",
          backgroundColor: "#ffffff",
          border: "1px solid #e5e5e5",
        }}
      >
        <Title level={2} style={{ color: "#262626", marginBottom: "16px" }}>
          M - Botões de Ícone (Tamanho Médio)
        </Title>

        <table className="matrix-table">
          <thead>
            <tr>
              <th className="matrix-header"></th>
              {buttonVariants.map((variant) => (
                <th key={variant.name} className="matrix-header">
                  {variant.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {buttonStates.map((state) => (
              <tr key={state.name}>
                <td className="matrix-row-header">{state.name}</td>
                {buttonVariants.map((variant) => (
                  <td
                    key={`${variant.component}-${state.name}`}
                    className="matrix-cell"
                  >
                    {renderIconButton(variant.component, state)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Matriz de Botões de Ícone - Tamanho Grande */}
      <Card
        style={{
          marginBottom: "24px",
          backgroundColor: "#ffffff",
          border: "1px solid #e5e5e5",
        }}
      >
        <Title level={2} style={{ color: "#262626", marginBottom: "16px" }}>
          L - Botões de Ícone (Tamanho Grande)
        </Title>

        <table className="matrix-table">
          <thead>
            <tr>
              <th className="matrix-header"></th>
              {buttonVariants.map((variant) => (
                <th key={variant.name} className="matrix-header">
                  {variant.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {buttonStates.map((state) => (
              <tr key={state.name}>
                <td className="matrix-row-header">{state.name}</td>
                {buttonVariants.map((variant) => (
                  <td
                    key={`${variant.component}-${state.name}`}
                    className="matrix-cell"
                  >
                    {renderIconButton(variant.component, state, "large")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Matriz de Botões de Ícone - Tamanho Pequeno */}
      <Card
        style={{
          marginBottom: "24px",
          backgroundColor: "#ffffff",
          border: "1px solid #e5e5e5",
        }}
      >
        <Title level={2} style={{ color: "#262626", marginBottom: "16px" }}>
          S - Botões de Ícone (Tamanho Pequeno)
        </Title>

        <table className="matrix-table">
          <thead>
            <tr>
              <th className="matrix-header"></th>
              {buttonVariants.map((variant) => (
                <th key={variant.name} className="matrix-header">
                  {variant.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {buttonStates.map((state) => (
              <tr key={state.name}>
                <td className="matrix-row-header">{state.name}</td>
                {buttonVariants.map((variant) => (
                  <td
                    key={`${variant.component}-${state.name}`}
                    className="matrix-cell"
                  >
                    {renderIconButton(variant.component, state, "small")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Exemplos de Uso */}
      <Card
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #e5e5e5",
        }}
      >
        <Title level={2} style={{ color: "#262626", marginBottom: "16px" }}>
          Exemplos de Uso
        </Title>
        <Space wrap size="middle">
          <Button type="primary" icon={<MailOutlined />}>
            Entrar com o e-mail
          </Button>
          <Button type="primary" icon={<SendOutlined />}>
            Enviar processo
          </Button>
          <Button type="default" icon={<PlusOutlined />}>
            + Adicionar cliente
          </Button>
          <Button type="default" icon={<EditOutlined />}>
            Editar
          </Button>
          <Button type="primary" danger icon={<DeleteOutlined />}>
            Excluir
          </Button>
          <Button type="default" icon={<LeftOutlined />}>
            ← Anterior
          </Button>
          <Button type="default" icon={<RightOutlined />}>
            Próximo →
          </Button>
          <Button type="text" icon={<DollarOutlined />} />
          <Button type="text" icon={<BellOutlined />} />
        </Space>
      </Card>
    </div>
  );
};

export default BotoesPage;
