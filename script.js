document.addEventListener
    (
        'DOMContentLoaded', () => 
            {
                const Nivel_jp = document.getElementById('Nivel-jp');
                const Nivel_jp_opc = document.getElementById('Nivel-jp-opc');

                Nivel_jp.addEventListener
                (
                    'click', (event) => 
                        {
                            event.stopPropagation(); // Impede que o clique no botão feche o menu
                            Nivel_jp_opc.style.display = Nivel_jp_opc.style.display === 'block' ? 'none' : 'block';
                        }
                );

                document.addEventListener
                (
                    'click', () => 
                        {
                            Nivel_jp_opc.style.display = 'none'; // Fecha o menu se clicar fora dele
                        }
                );

                Nivel_jp_opc.addEventListener
                (
                    'click', (event) => 
                        {
                            event.stopPropagation(); // Impede que o clique na lista feche o menu
                        }
                );

                const Menu_info = document.getElementById('Menu-info');
                const Menu_info_opc = document.getElementById('Menu-info-opc');

                Menu_info.addEventListener
                (
                    'click', (event) => 
                        {
                            event.stopPropagation(); // Impede que o clique no botão feche o menu
                            Menu_info_opc.style.display = Menu_info_opc.style.display === 'block' ? 'none' : 'block';
                        }
                );

                document.addEventListener
                (
                    'click', () => 
                        {
                            Menu_info_opc.style.display = 'none'; // Fecha o menu se clicar fora dele
                        }
                );

                Menu_info_opc.addEventListener
                (
                    'click', (event) => 
                        {
                            event.stopPropagation(); // Impede que o clique na lista feche o menu
                        }
                );

                const Login = document.getElementById('Login');
                const Login_opc = document.getElementById('Login-opc');

                Login.addEventListener
                (
                    'click', (event) => 
                        {
                            event.stopPropagation(); // Impede que o clique no botão feche o menu
                            Login_opc.style.display = Login_opc.style.display === 'block' ? 'none' : 'block';
                        }
                );

                document.addEventListener
                (
                    'click', () => 
                        {
                            Login_opc.style.display = 'none'; // Fecha o menu se clicar fora dele
                        }
                );

                Login_opc.addEventListener
                (
                    'click', (event) => 
                        {
                            event.stopPropagation(); // Impede que o clique na lista feche o menu
                        }
                );
            }
    );