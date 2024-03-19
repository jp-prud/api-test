# App

Stack: Node.js, Prisma, Serverless, React Native & Typescript

## Overview

Automatizar o processo de acompanhamento de idosos

## Requisitos

### Requisitos Funcionais

### MVP

- [ ] Deve ser possível realizar novos acompanhamentos;
- [ ] Deve ser possível visualizar todos os acompanhamentos;
- [ ] Deve ser gerar / enviar relatório automático para os responsáveis utilizando IA & WhatsApp API;

### Regras de Negócio

- [ ] Os acompanhamentos deve ser removidos automaticamente após 7 dias;

### Entidades

- Company
  -> id | name | accessKey | (members: 1 - N) | (reports: 1 - N) | createdAt

- Members
  -> id | name | age | phone | (report: 1 - N) | (company: 1 - 1) |createAt

- Reports
  -> id | (member: 1 - 1) | (company: 1 - 1) | createAt 


  

