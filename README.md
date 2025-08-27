1) Dockerfile, arquivo de configuração para o contâiner. Lá dentro vc passa os parâmetros para a criação da imagem (o que vai usar para buildar, o que vai usar). Após isso, builda a imagem. 
-> docker build -t nome-da-imagem .

2) Executa a imagem, cria e disponibiliza o contâiner.
-> docker run nome-da-imagem
(ou docker run id-da-imagem)

3) Parar contêineres que estão rodando
-> docker stop nome-do-container

4) Executar a imagem na porta específicada 
-> docker run -d -p porta-local:porta-do-container nome-da-imagem

5) Listar todas as imagens disponíveis localmente.
-> docker images

6) Listar todos os contêineres ativos.
-> docker ps

7) Listar todos os contêineres (inclusive os parados).
-> docker ps -a

8) Remover uma imagem .
-> docker rmi nome-da-imagem
(ou docker rmi id-da-imagem)

9) Remover um contêiner
-> docker rm nome-do-container

10) Acessar o terminal de um contêiner em execução.
-> docker exec -it nome-do-container bash

11) Ver os logs do contêiner 
-> docker logs nome-do-container

12) Copiar arquivos do host para o contêiner. 
-> docker cp caminho/local nome-do-container:/caminho/no/container

13) Copiar arquivos do contêiner para o host.
-> docker cp nome-do-container:/caminho/no/container caminho/local

14) Fazer build e rodar direto com docker-compose.
-> docker-compose up --build

15) Parar e remover os contêineres com docker-compose.
-> docker-compose down

16) Renomear um contâiner
-> docker rename (nome atual) (nome novo)