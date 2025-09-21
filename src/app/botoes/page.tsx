"use client";

import React from "react";
import { Button, Space, Typography, Card, ConfigProvider, Table } from "antd";
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

  const createTableData = (size: string) => {
    return buttonStates.map((state, index) => {
      const row: Record<string, React.ReactNode> = {
        key: `${size}-${index}`,
        state: state.name,
      };

      buttonVariants.forEach((variant) => {
        row[variant.component] = size.includes("Icon")
          ? renderIconButton(
              variant.component,
              state,
              size.replace("Icon", "").toLowerCase()
            )
          : renderButton(variant.component, state, size.toLowerCase());
      });

      return row;
    });
  };

  const tableColumns = [
    {
      title: "",
      dataIndex: "state",
      key: "state",
      width: 120,
    },
    ...buttonVariants.map((variant) => ({
      title: variant.name,
      dataIndex: variant.component,
      key: variant.component,
      align: "center" as const,
      width: 120,
    })),
  ];

  return (
    <Space
      direction="vertical"
      size="large"
      style={{ width: "100%", padding: "24px" }}
    >
      <Space direction="vertical" size="small">
        <Title level={1}>JusCash Design System</Title>
        <Text type="secondary">
          Componentes de botões com todos os estados e variantes
        </Text>
      </Space>

      <Card title="M - Botões de Texto (Tamanho Médio)">
        <Table
          columns={tableColumns}
          dataSource={createTableData("middle")}
          pagination={false}
          showHeader
          size="small"
          bordered
        />
      </Card>

      <Card title="L - Botões de Texto (Tamanho Grande)">
        <Table
          columns={tableColumns}
          dataSource={createTableData("large")}
          pagination={false}
          showHeader
          size="small"
          bordered
        />
      </Card>

      <Card title="S - Botões de Texto (Tamanho Pequeno)">
        <Table
          columns={tableColumns}
          dataSource={createTableData("small")}
          pagination={false}
          showHeader
          size="small"
          bordered
        />
      </Card>

      <Card title="M - Botões de Ícone (Tamanho Médio)">
        <Table
          columns={tableColumns}
          dataSource={createTableData("middleIcon")}
          pagination={false}
          showHeader
          size="small"
          bordered
        />
      </Card>

      <Card title="L - Botões de Ícone (Tamanho Grande)">
        <Table
          columns={tableColumns}
          dataSource={createTableData("largeIcon")}
          pagination={false}
          showHeader
          size="small"
          bordered
        />
      </Card>

      <Card title="S - Botões de Ícone (Tamanho Pequeno)">
        <Table
          columns={tableColumns}
          dataSource={createTableData("smallIcon")}
          pagination={false}
          showHeader
          size="small"
          bordered
        />
      </Card>

      <Card title="Exemplos de Uso">
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
    </Space>
  );
};

export default BotoesPage;
