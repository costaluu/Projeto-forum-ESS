Feature: Criar notícias
    As usuario administrador
    I want to remover noticias
    So that eu posso gerenciar melhor o meu site

    Scenario: Remover uma notícia
        Given eu estou logado como administrador e a notícia "Felipe Ret é preso" está cadastrada no sistema
        And estou na página de gerenciamento de notícias
        When Eu removo a notícia "Felipe Ret é preso".
        Then Eu recebo uma mensagem de confirmação
        And O sistema remove a notícia de título "Felipe Ret é preso".

    Scenario: Remoção mal sucedida uma notícia
        Given eu estou logado como administrador e a notícia "Felipe Ret é preso" está cadastrada no sistema
        And estou na página de gerenciamento de notícias
        When eu preencho os campos para a criação da notícia com "título" "Felipe Ret é preso"
        Then Eu vejo uma mensagem de erro.
        And A notícia com o mesmo título "Felipe Ret é preso" não é cadastrada no sistema.