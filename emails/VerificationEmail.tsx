import { 
    Html, 
    Head, 
    Font,
    Preview,
    Heading,
    Row,
    Section,
    Text,
    Button,
    Body
} from "@react-email/components";

interface VerificationEmailProps {
    username: string;
    opt: string;
}

export const VerificationEmail: React.FC<VerificationEmailProps> = ({ username, opt }) => { 
    return (
        <Html lang='en' dir='ltr'>
            <Head>
                <title>Verify Your Email</title>
                <Font 
                    fontFamily='Helvetica'
                    fallbackFontFamily='Arial'
                />
            </Head>
            <Body>
                <Preview>Verify Your Email</Preview>
                <Heading>
                    <Text color="#666" size="20" weight="semibold">
                        Verify Your Email
                    </Text>
                </Heading>
                <Section>
                    <Text>
                        Hi {username},
                        <br />
                        Thank you for signing up with our platform. To complete your registration, please click on the button below.
                    </Text>
                    <Row>
                        <Button href={`http://localhost:3000/verify/${opt}`}>
                            Verify Email
                        </Button>
                    </Row>
                </Section>
            </Body>
        </Html>
    );
};