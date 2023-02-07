
Feature: Signup/Login page
"""This file is responsible for login and signup"""

Scenario: Validar se o campo State aceita nomes ou números inválidos
"""Este cenário valida se o campo State aceita nomes/números inválidos"""
Given que eu tenho acesso a pagina do automation exercise
And que eu tenha acesso a algum browser (chrome ou firefox)
When eu acessar a página
And clicar em 'Signup/Login'
And inserir um <name> nome válido
And <email> e-mail adress válido
And clicar em Signup 
Then irei acessar a página de cadastrar minhas informações
When eu inserir <nomes ou números> nomes ou números inválidos no campo State
Then uma mensagem de erro deve aparecer

Examples:
|Name                 |  email                   | nomes ou números |
|Diego Franceli       |diegofranceli1@gmail.com  | sdfsdfsdff       |
|Sebastião da Silva   |sebastião@yahoo.com.br    |16521dsfsdfsd     |

Scenario: Validar se a página de informacoes da conta é carregada
@TesteID001
"""Este cenário valida se o campo State aceita nomes/números inválidos"""
Given que eu tenho acesso a pagina do automation exercise
And que eu tenha acesso a algum browser (chrome ou firefox)
When eu acessar a página
And clicar em 'Signup/Login'
And inserir um <name> nome válido
And <email> e-mail adress válido
And clicar em Signup 
Then irei acessar a página de cadastrar minhas informações

Examples:
|Name                 |  email                   |
|Diego Franceli       |diegofranceli1@gmail.com  |
|Sebastião da Silva   |sebastião@yahoo.com.br    |

Scenario: Validar se todos os campos são mostrados na página de informacoes da conta
@TesteID002
"""Este cenário valida se """
Given que eu executei o @TesteID001 
Then o campo <campo> é mostrado

Examples:
|Campo          |
|Title          |
|Name           |
|Email          |
|Password       |
|Date of Birth  |
|First name     |
|Last name      |
|Company        |
|Adress         |
|Adress2        |
|Country        |
|State          |
|City           |
|Zipcode        |
|Mobile Number  |


Scenario: Logo da página na posição errada
"""Este cenário valida se o logo da página está na posição errada"""
Given que eu tenho acesso a pagina do automation exercise
And que eu tenha acesso a algum browser (chrome ou firefox)
When eu acessar a página
Then o logo está do lado esquerdo

Scenario: Logo da página na posição errada - 2
"""Este cenário valida se o logo da página está na posição errada"""
Given que eu acesso wwww.automationexercise.com em algum brownser
Then o logo sera mostrado ao lado direito da paginas