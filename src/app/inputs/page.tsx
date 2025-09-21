"use client";

import React, { useState } from "react";
import {
  Input,
  Space,
  Typography,
  Card,
  ConfigProvider,
  Table,
  Avatar,
  Checkbox,
  Radio,
  Form,
  Button,
} from "antd";
import { Heart, User, Mail, Lock, Eye, EyeOff } from "lucide-react";

const { Title, Text } = Typography;

const InputsPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Estados dos inputs
  const inputStates = [
    { name: "Empty", props: {} },
    { name: "Placeholder", props: { placeholder: "Placeholder" } },
    { name: "Value", props: { defaultValue: "Value" } },
    { name: "Focus", props: { defaultValue: "Value", autoFocus: true } },
    {
      name: "Error",
      props: { defaultValue: "Value", status: "error" as const },
    },
    {
      name: "Error Focus",
      props: {
        defaultValue: "Value",
        status: "error" as const,
        autoFocus: true,
      },
    },
    { name: "Disabled", props: { defaultValue: "Value", disabled: true } },
  ];

  // Tamanhos dos inputs
  const inputSizes = [
    { name: "Regular", size: undefined },
    { name: "Large", size: "large" as const },
    { name: "Small", size: "small" as const },
    { name: "Mini", size: undefined, customSize: "mini" },
  ];

  // Decorações
  const decorations = [
    { name: "Icon", component: <Heart style={{ width: 16, height: 16 }} /> },
    {
      name: "Icon Muted",
      component: <Heart style={{ width: 16, height: 16 }} />,
    },
    {
      name: "Avatar",
      component: (
        <Avatar size="small" style={{ backgroundColor: "#105ABC" }}>
          CN
        </Avatar>
      ),
    },
    { name: "Checkbox", component: <Checkbox /> },
    { name: "Text", component: <Text>[Text]</Text> },
    { name: "Text Muted", component: <Text type="secondary">[Text]</Text> },
    { name: "Radio", component: <Radio checked /> },
  ];

  const renderInput = (state: any, size: any) => {
    const baseProps = {
      size: size.customSize ? undefined : size.size,
      style:
        size.customSize === "mini"
          ? { height: "24px", fontSize: "12px" }
          : undefined,
      ...state.props,
    };

    return <Input {...baseProps} />;
  };

  const createTableData = (size: any) => {
    return inputStates.map((state, index) => {
      const row: Record<string, React.ReactNode> = {
        key: `${size.name}-${index}`,
        state: state.name,
      };

      // Para cada estado, criar uma célula com o input
      row.input = renderInput(state, size);

      return row;
    });
  };

  const createTableColumns = (sizeName: string) => [
    {
      title: "",
      dataIndex: "state",
      key: "state",
      width: 120,
    },
    {
      title: sizeName,
      dataIndex: "input",
      key: "input",
      align: "center" as const,
    },
  ];

  return (
    <Space
      direction="vertical"
      size="large"
      style={{ width: "100%", padding: "24px" }}
    >
      <Space direction="vertical" size="small">
        <Title level={1}>JusCash Text Field</Title>
        <Text type="secondary">
          Componentes de input de texto com todos os estados e tamanhos
        </Text>
      </Space>

      {/* Matriz de Estados e Tamanhos */}
      {inputSizes.map((size) => (
        <Card
          key={size.name}
          title={`${size.name} - Text Field States and Sizes`}
        >
          <Table
            columns={createTableColumns(size.name)}
            dataSource={createTableData(size)}
            pagination={false}
            showHeader
            size="small"
            bordered={false}
          />
        </Card>
      ))}

      {/* Seção de Decorações */}
      <Card title="Decoration">
        <Space direction="vertical" size="middle">
          <div>
            <Title level={4}>Default</Title>
            <Space wrap size="middle">
              {decorations.map((decoration, index) => (
                <div
                  key={index}
                  style={{ textAlign: "center", minWidth: "80px" }}
                >
                  {decoration.component}
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#666",
                      marginTop: "4px",
                    }}
                  >
                    {decoration.name}
                  </div>
                </div>
              ))}
            </Space>
          </div>

          <div>
            <Title level={4}>Large</Title>
            <Space wrap size="middle">
              {decorations.map((decoration, index) => (
                <div
                  key={index}
                  style={{ textAlign: "center", minWidth: "80px" }}
                >
                  <div style={{ transform: "scale(1.2)" }}>
                    {decoration.component}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#666",
                      marginTop: "4px",
                    }}
                  >
                    {decoration.name}
                  </div>
                </div>
              ))}
            </Space>
          </div>
        </Space>
      </Card>

      {/* Exemplos Práticos */}
      <Card title="Exemplos">
        <Space size="large" align="start">
          {/* Formulário de Login - Sucesso */}
          <Card style={{ width: 400 }} title="Boas-vindas!" size="small">
            <Text
              type="secondary"
              style={{ display: "block", marginBottom: "24px" }}
            >
              Bem-vindo ao Programa de Benefícios JusCash! Por favor, insira
              seus dados abaixo para realizar o login.
            </Text>

            <Form layout="vertical">
              <Form.Item label="E-mail">
                <Input
                  defaultValue="seu@email.com"
                  prefix={<Mail style={{ width: 16, height: 16 }} />}
                />
              </Form.Item>

              <Form.Item label="Senha">
                <Input.Password
                  placeholder="Digite sua senha"
                  iconRender={(visible) =>
                    visible ? (
                      <Eye style={{ width: 16, height: 16 }} />
                    ) : (
                      <EyeOff style={{ width: 16, height: 16 }} />
                    )
                  }
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" block>
                  Entrar
                </Button>
              </Form.Item>

              <Form.Item style={{ marginBottom: 0, textAlign: "center" }}>
                <Button type="link">Esqueci minha senha</Button>
              </Form.Item>
            </Form>
          </Card>

          {/* Formulário de Login - Erro */}
          <Card style={{ width: 400 }} title="Boas-vindas!" size="small">
            <Text
              type="secondary"
              style={{ display: "block", marginBottom: "24px" }}
            >
              Bem-vindo ao Programa de Benefícios JusCash! Por favor, insira
              seus dados abaixo para realizar o login.
            </Text>

            <Form layout="vertical">
              <Form.Item label="E-mail">
                <Input
                  defaultValue="seu@email.com"
                  prefix={<Mail style={{ width: 16, height: 16 }} />}
                />
              </Form.Item>

              <Form.Item
                label="Senha"
                validateStatus="error"
                help="Senha incorreta"
              >
                <Input.Password
                  defaultValue="********"
                  status="error"
                  iconRender={(visible) =>
                    visible ? (
                      <Eye style={{ width: 16, height: 16 }} />
                    ) : (
                      <EyeOff style={{ width: 16, height: 16 }} />
                    )
                  }
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" block>
                  Entrar
                </Button>
              </Form.Item>

              <Form.Item style={{ marginBottom: 0, textAlign: "center" }}>
                <Button type="link">Esqueci minha senha</Button>
              </Form.Item>
            </Form>
          </Card>

          {/* Inputs com Decorações */}
          <Space direction="vertical" size="middle">
            <div>
              <Text strong>Label</Text>
              <Input
                prefix={<Heart style={{ width: 16, height: 16 }} />}
                placeholder="Placeholder"
              />
            </div>

            <div>
              <Text strong>Label</Text>
              <Input
                prefix={<Heart style={{ width: 16, height: 16 }} />}
                placeholder="Placeholder"
                size="large"
              />
            </div>

            <div>
              <Text strong>Label</Text>
              <Input
                prefix={<Heart style={{ width: 16, height: 16 }} />}
                defaultValue="Value"
              />
            </div>

            <div>
              <Text strong>Campo obrigatório*</Text>
              <Input
                prefix={<Heart style={{ width: 16, height: 16 }} />}
                placeholder="Placeholder"
              />
              <Text type="secondary" style={{ fontSize: "12px" }}>
                Helper text
              </Text>
            </div>
          </Space>
        </Space>
      </Card>
    </Space>
  );
};

export default InputsPage;
