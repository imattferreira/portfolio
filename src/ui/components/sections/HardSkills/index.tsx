import { motion } from 'framer-motion';
import React, { createElement } from 'react';

import mySkills from '../../../../app/data/mySkills';
import HardSkill from './HardSkill';
import { Container, Title, Wrapper } from './styles';

function HardSkills() {
  return (
    <Container id="skills">
      <motion.div
        whileInView={{ marginTop: '0rem' }}
        transition={{ duration: 0.75 }}
        style={{ marginTop: '18rem' }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Title>Habilidades</Title>
        </motion.div>
        <Wrapper>
          {mySkills.hardSkills.map((skill) => (
            <HardSkill
              key={skill.name}
              name={skill.name}
              description={skill.description}
              icon={createElement(skill.icon)}
            />
          ))}
        </Wrapper>
      </motion.div>
      <hr />
    </Container>
  );
}

export default HardSkills;
