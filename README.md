<!--Dockerfile, arquivo de configuração para o contâiner. Lá dentro vc passa os parâmetros para a criação da imagem (o que vai usar para buildar, o que vai usar). Após isso, builda a imagem. !-->

-> docker build -t nome-da-imagem .

<!--Executa a imagem, cria e disponibiliza o contâiner. !-->

-> docker run nome-da-imagem
(ou docker run id-da-imagem)

<!--Parar contêineres que estão rodando !-->

-> docker stop nome-do-container

<!--Executar a imagem na porta específicada !-->

-> docker run -d -p porta-local:porta-do-container nome-da-imagem

<!--Listar todas as imagens disponíveis localmente !-->

-> docker images

<!--Listar todos os contêineres ativos !-->

-> docker ps

<!--Listar todos os contêineres (inclusive os parados) !-->

-> docker ps -a

<!--Remover uma imagem !-->

-> docker rmi nome-da-imagem
(ou docker rmi id-da-imagem)

<!--Remover um contêiner !-->

-> docker rm nome-do-container

<!--Acessar o terminal de um contêiner em execução !-->

-> docker exec -it nome-do-container bash

<!--Ver os logs do contêiner !-->

-> docker logs nome-do-container

<!--Copiar arquivos do host para o contêiner !-->

-> docker cp caminho/local nome-do-container:/caminho/no/container

<!--Copiar arquivos do contêiner para o host !-->

-> docker cp nome-do-container:/caminho/no/container caminho/local

<!--Fazer build e rodar direto com docker-compose !-->

-> docker-compose up --build

<!--Parar e remover os contêineres com docker-compose !-->

-> docker-compose down