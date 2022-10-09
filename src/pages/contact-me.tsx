import { NextPage } from 'next';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

import SocialNetwork from '../components/SocialNetwork';
import { styled } from '../ui/styles';

const Container = styled('div', {
  height: '80%',
  display: 'flex',
  flexDirection: 'column',
  '& h1': {
    fontSize: 30,
    '@bp2': {
      marginTop: 0,
      marginBottom: '$20',
      fontSize: 44
    }
  }
});

const Content = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  justifySelf: "center",
  flexDirection: 'column',
  marginTop: '$20',

  '@bp2': {
    flexDirection: 'row',
    marginTop: 0,

    '& > *:not(:first-of-type)': {
      marginLeft: '$8'
    },
  }
});

const ContactMe: NextPage = () => (
  <Container>
    <h1>Contact Me</h1>
    <Content>
      <SocialNetwork name="LinkedIn" icon={<AiFillLinkedin />} link="https://www.linkedin.com/in/matt-ferreira18/" />
      <SocialNetwork name="Github" icon={<AiFillGithub />} link="https://github.com/MattFerreira18" />
      <SocialNetwork
        name="E-mail"
        icon={<AiOutlineMail />}
        link="mailto:matheusferreira.dev@gmail.com"
      />
    </Content>
  </Container>
);

export default ContactMe;
