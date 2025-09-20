"use client";
import { Typography, Button, Space, Card, Row, Col } from "antd";
import Link from "next/link";

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
      <Title level={1}>Design System</Title>
      <Paragraph>
        Sistema de design baseado em Ant Design com cores e componentes personalizados. O
        ConfigProvider foi configurado globalmente com as cores do design system.
      </Paragraph>

      <Row gutter={[16, 16]} style={{ marginTop: "32px" }}>
        <Col xs={24} sm={12} md={8}>
          <Card title="Cores Primárias" bordered>
            <Space direction="vertical" style={{ width: "100%" }}>
              <Button type="primary" block>
                Botão Primário
              </Button>
              <Button type="default" block>
                Botão Padrão
              </Button>
              <Button type="dashed" block>
                Botão Tracejado
              </Button>
            </Space>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card title="Estados de Feedback" bordered>
            <Space direction="vertical" style={{ width: "100%" }}>
              <Button type="primary" danger block>
                Erro
              </Button>
              <Button
                type="primary"
                style={{ backgroundColor: "#f59e0b", borderColor: "#f59e0b" }}
                block
              >
                Aviso
              </Button>
              <Button
                type="primary"
                style={{ backgroundColor: "#22c55e", borderColor: "#22c55e" }}
                block
              >
                Sucesso
              </Button>
            </Space>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card title="Tipografia" bordered>
            <Title level={2}>Título H2</Title>
            <Title level={3}>Título H3</Title>
            <Title level={4}>Título H4</Title>
            <Paragraph>
              Este é um parágrafo de exemplo usando a tipografia configurada no design system.
            </Paragraph>
            <Paragraph type="secondary">Texto secundário com cor mais suave.</Paragraph>
          </Card>
        </Col>
      </Row>

      <Card style={{ marginTop: "24px" }} title="Páginas do Design System">
        <Paragraph>Explore os componentes do design system:</Paragraph>
        <Space wrap>
          <Link href="/buttons">
            <Button type="primary">Ver Componentes de Botão</Button>
          </Link>
          <Button disabled>Cores (Em breve)</Button>
          <Button disabled>Tipografia (Em breve)</Button>
          <Button disabled>Formulários (Em breve)</Button>
        </Space>
      </Card>

      <Card style={{ marginTop: "24px" }} title="Próximos Passos">
        <Paragraph>O ConfigProvider está configurado globalmente. Agora você pode:</Paragraph>
        <ul>
          <li>✅ Criar página específica para componentes de botão</li>
          <li>Criar páginas específicas para demonstrar cada categoria de cores</li>
          <li>Adicionar mais componentes personalizados</li>
          <li>Configurar tokens de design mais específicos</li>
          <li>Implementar modo escuro</li>
        </ul>
      </Card>
    </div>
  );
}
