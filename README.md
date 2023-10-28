# Volunteers.maneger.System | Resumo | GUIT 

Para um melhor entendimento deste documento, introduzimos uma lista de siglas pra que qualquer pessoa possa entender, todas a siglas e jargão técnico presente neste documento.


                            <h3>Lista de tabela de siglas<h3>

Banco de dados (Onde é armazenado as informações inseridas no sistema)

Servidor (Recurso dentro de um sistema computacional maior, capaz de processar aplicações, prestar serviços e armazenar dados)

WI-FI (Wireless Fidelity – comunicação sem fio de alta fidelidade)

Dashboard (painel visual que contém informações, métricas e indicadores)

HTML (linguagem de marcação ou linguagem de marcação de Hipertexto) 

Javascript (linguagem de programação usado para desenvolver páginas interativas)

GUITHUB (Plataforma de desenvolvimento colaborativo e controle de versões)



🧭	Objetivo
O sistema será desenvolvido para auxiliar as escalas dos voluntários e indicará a saúde dos nossos voluntários, oferecendo em tempo real como está cada voluntário, podendo auxiliar as lideranças e pastores há monitorar suas equipes e membros ativos introduzindo todas as informações no banco de dados, onde poderá ser realizado verificação das informações inseridas.

Será desenvolvido por partes e ao longo da sua vida útil será acrescentado novas funções, será gerada uma nova atualização deste documento para fins futuros, proporcionando um melhor entendimento da equipe durante o ciclo de vida do sistema.


2.	Especificações do sistema

•	Inserir o voluntário em seu grupo que irá servir.
•	O voluntário poderá indicar qual dia estará disponível.
•	A escala será que realizada assim que todos os membros informarem os dias que poderão servir.
•	Será direcionado ao seu WhatsApp o dia que irá servir.
•	Será criado um dashboard indicando a saúde do voluntário por grupos e individuais.

3.	 Marcos
•	O sistema será desenvolvido e HTML, Javascript e CSS.
•	Há princípio será mantido no repositório GUITHUB do desenvolvedor com um link do servidor Versel para rodar o sistema online.
•	Será criado um Banco de dados inicialmente na máquina do desenvolvedor onde deixar online 24h com usuário e senha.
•	Será escalonado um servido em nuvem para rodar automaticamente sem ter problemas de desligamento do equipamento ou quedas de energia podendo ocasionar falhas no banco de dados.

4.	Gerenciamento de risco
Visto que o banco de dados será inserido na máquina do desenvolvedor será lançado os possíveis risco que poderá ocorrer inicialmente.
Queda de energia	Eminente
Manutenção do equipamento	Eminente
Espação de armazenamento 	Pouco provável 
Limpeza de memória	Realizada a cada 30 dias
Atualização das informações	Realizada a cada 30 dias
Manutenção do servidor	Será realizado a cada 15 dias
Erros de Atualizações de versões	Médio
Queda de energia da celesc	Eminente

3.	Cronograma 

|Tarefas	Início	Término|
|-|
|Levantamento de Requisitos:	13/09/23	- 17/09/23:
|Desenvolvimento designer:	20/09/23	- 28/09/23|
|Desenvolvimento de sistema:	28/09/23 - 15/10/23|
|Der e Mer:	22/09/23 - 24/09/23|
|Fluxo grama:	17/09/23 - 19/09/2023|

4.	Documentação Regras de Negócio
<BR>

|RF001|
|-------|
|Nome: Banco de dados|
|Módulo	Cadastro|
|Data de Criação:	30/09/2023|
|Autor	Elias|
|Versão:	0.1|
|Dependência:	N/A|
|Descrição:	O Sistema deverá armazenar as informações inseridas|
|Tipo:	Sistema|




|RF002|
|-|
|Nome:	Gerenciamento de Mensagens|
|Módulo	Mensagens|
|Data de Criação:	05/10/2023|
|Autor	Elias|
|Versão	0.1|
|Dependência:	N/A|
|Descrição:	Assim que os usuários inserirem os dias que não poderá servir, deverá ser gerado os dias da escala.
|Tipo	Sistema|



|RF003|
|-|
|Nome:	Acesso master|
|Módulo	Cadastro|
|Data de Criação:	30/09/2023|
|Autor	Elias|
|Versão	0.1|
|Dependência:Banco de dados|
|Descrição	O desenvolvedor deverá inserir os usuários master no sistema.
|Tipo	acesso|


|RF004|
|-|
|Nome:	Recadastro|
|Módulo:	Cadastro|
|Data de Criação:	25/10/2023|
|Autor:	Elias|
|Versão:	0.1|
|Dependência:	N/A|
|Descrição:	O usuário master deverá inserir a opção ativo no cadastro dos voluntários que voltarem a servir.|
|Tipo:	Alteração|


|RF005|
|-|
|Nome:	Cadastro|
|Módulo:	Banco de dados|
|Data de Criação:	26/10/2023|
|Autor:	Elias|
|Versão:	0.1|
|Dependência:	Usuários master|
|Descrição	Os usuários master deveram inserir o nome, e-mail, telefone dos voluntários.|
|Tipo:	Acesso|



|RF006|
|-|
|Nome:	Indicação de dias disponíveis|
|Módulo:	escolha
|Data de Criação:	23/09/2023
|Autor:	Elias|
|Versão:	0.1|
|Dependência:	N/A|
|Descrição	O Sistema deve apresentar um menu com a aba voluntário, onde será introduzido o nome e número de telefone.|
|Tipo:	Sistema|


|RF007|
|-|
|Nome:	Mensagem automática|
|Módulo:	mensagem|
|Data de Criação:	26/09/2023|
|Autor:	Elias|
|Versão:	0.1|
|Dependência:	Cadastro|
|Descrição:	O Sistema deve identificar a o mês e dia dos voluntários e enviar uma mensagem alertando do dia que está escalado.|
|Tipo:	Sistema|


|RF008|
|-|
|Nome:	Escalas|
|Módulo:	Gerenciamento|
|Data de Criação:	27/09/2023|
|Autor:	Elias|
|Versão:	0.1|
|Dependência:	Escalas|
|Descrição:	O Sistema deve identificar a o mês e dia e horário do dia que o voluntário irá servir.|
|Tipo:	Sistema|

|RF009|
|-|
|Nome:	Acesso ao sistema|
|Módulo:	acesso|
|Data de Criação:	15/09/2023|
|Autor:	Elias
|Versão: 0.1
|Dependência	N/A
|Descrição	Somente os usuários master poderão acessar o banco de dados para inserir informações no sistema.|
|Tipo:	Restrições|

|RF0010|
|-|
|Nome:	Sistema responsivo|
|Módulo:	Sistema|
|Data de Criação:	15/09/2023|
|Autor:	Elias|
|Versão:	0.1|
|Dependência:	N/A|
|Descrição:	O sistema web deverá ser responsivo podendo ser acessado em múltiplas resoluções de tela.|
|Tipo:	Desenvolvimento|



|RN001|
|-|
|Nome:	Banco de dados|
|Módulo:	Dados|
|Data de Criação:	10/10/2023|
|Autor:	Elias|
|Versão:	0.1|
|Dependência:	N/A|
|Descrição:	Deverá ser criado um banco de dados.|
|Tipo:	dados|


5.	Entidades de Relacionamento
 
6.	Modelos de caso de uso.
