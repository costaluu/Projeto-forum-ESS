Feature: Criar notícias
    As usuario administrador
    I want to criar noticias
    So that eu consigo alimentar o site e atrair novos usuários

    Scenario: Cadastro bem sucedido uma notícia
        Given eu estou logado como administrador
        And estou na página de gerenciamento de notícias
        When eu preencho os campos para a criação da notícia com "título" "Felipe Ret é preso"
        Then Eu vejo uma mensagem de confirmação
        And A notícia com título "Felipe Ret é preso" está cadastrada no sistema.

    Scenario: Cadastro mal sucedido uma notícia
        Given eu estou logado como administrador
        And estou na página de gerenciamento de notícias
        When eu não preencho todos os campos para criação da notícia com "título" "Felipe Ret é preso"
        Then Eu vejo uma mensagem de erro
        And A notícia com título "Felipe Ret é preso" não é cadastrada no sistema.

    Scenario: Cadastro de uma nóticia com o mesmo identificador
        Given eu estou logado como administrador e a notícia de título "Felipe Ret é preso" e identificador "X"
        And estou na página de gerenciamento de notícias
        When eu preencho os dados da nóticia de título "Baiano é preso" com o identificador "x"
        Then Eu vejo uma mensagem de erro
        And A notícia com título "Baiano é preso" não é cadastrada no sistema.

    Scenario: Editar uma notícia
        Given eu estou logado como administrador e a notícia "Felipe Ret é preso" está cadastrada no sistema
        And estou na página de gerenciamento de notícias
        When Eu edito a notícia "Felipe Ret é preso" mudando o título para "Baiano é preso".
        Then Eu recebo uma mensagem de confirmação
        And O sistema edita a notícia de título "Felipe Ret é preso" para "Baiano é preso"
        And a data de edição é registrada.

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

    Scenario: Edição mal sucedida de uma notícia
        Given eu estou logado como administrador e a notícia "Felipe Ret é preso" está cadastrada no sistema
        And estou na página de gerenciamento de notícias
        When Eu edito a notícia "Felipe Ret é preso" não preenchendo algum campo obrigatório.
        Then Eu recebo uma mensagem de erro
        <<<<<<< HEAD
        Then resoluçao do relatorio
        =======
        Then resoluçao do relatorio

    Scenario: Fictício eh apenas um teste

    Scenario: Fictício2 Modificado
