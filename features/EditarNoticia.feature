Feature: Editar notícia
    As usuario administrador
    I want to editar noticias
    So that eu posso gerenciar melhor o meu site

    Scenario: Edição bem sucedida de uma notícia
        Given eu estou logado como administrador e a notícia "Felipe Ret é preso" está cadastrada no sistema
        And estou na página de gerenciamento de notícias
        When Eu edito a notícia "Felipe Ret é preso" mudando o título para "Baiano é preso".
        Then Eu recebo uma mensagem de confirmação
        And O sistema edita a notícia de título "Felipe Ret é preso" para "Baiano é preso"
        And a data de edição é registrada.

    Scenario: Edição mal sucedida de uma notícia
        Given eu estou logado como administrador e a notícia "Felipe Ret é preso" está cadastrada no sistema
        And estou na página de gerenciamento de notícias
        When Eu edito a notícia "Felipe Ret é preso" não preenchendo algum campo obrigatório.
        Then Eu recebo uma mensagem de erro
        Then resoluçao do relatorio


