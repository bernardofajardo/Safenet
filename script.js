document.addEventListener("DOMContentLoaded", function () {
    // Definir o idioma inicial como português
    let idiomaAtual = "pt";

    const traducoes = {
        pt: {
            "noticias-famosas": "Invasões Digitais: Os Ataques Informáticos Mais Impactantes",
            "site-title": "Safenet",
            "welcome": "Bem-vindo à Safenet!",
            "slogan": "A sua prioridade devia ser sempre a sua segurança.",
            "menu-proteger": "Como Proteger-se Online",
            "menu-nao-fazer": "O que não fazer Online",
            "nao-fazer-on": "O que NÃO fazer online ❌",
            "perigo": "A internet pode ser um lugar perigoso se não tiveres cuidado. Muitas pessoas caem em golpes, perdem o acesso às suas contas ou até expõem informações pessoais sem perceberem o risco. Para te protegeres, é essencial saber o que NÃO deves fazer. Pequenos erros podem levar a grandes problemas, como roubo de identidade, fraudes ou até cyberbullying. Segue estas dicas e navega com mais segurança, a internet está cheia de perigos. Protege-te e mantém os teus dados seguros com estas dicas essenciais.",
            "nao-enviar-fotos": "📸 Não enviar fotos ou informações privadas – Nunca sabes quem pode usá-las contra ti.",
            "nao-partilhar-vida": "💬 Não partilhar demasiado sobre a tua vida – O que publicas hoje pode afetar-te amanhã.",
            "nao-acreditar-fake-news": "🎭 Não acreditar em tudo o que vês online – Fake news espalham-se rápido, verifica sempre as fontes.",
            "proteger-online": "Como Podes Proteger-te Online 🔒",
            "perigos-online": "A internet está cheia de perigos, e a tua privacidade pode estar em risco sem que percebas. Tem cuidado com o que partilhas online, pois informações pessoais podem ser usadas contra ti. Redes sociais, fóruns e até jogos online podem ser fontes de exposição se não controlares bem quem tem acesso aos teus dados. Além disso, desconfia de pedidos de amizade ou mensagens de estranhos, pois podem esconder intenções maliciosas. Também é essencial questionares a veracidade das informações que encontras, pois as fake news espalham-se rapidamente e podem manipular a tua opinião. Protege-te e mantém os teus dados seguros com estas dicas essenciais.",
            "usar-senha": "🔑 Usa senhas fortes – Nunca repitas a mesma senha em diferentes contas!",
            "ativar-2fa": "💬 Não partilhar demasiado sobre a tua vida – O que publicas hoje pode afetar-te amanhã.",
            "evitar-links": "⚠️ Evita links suspeitos – Hackers adoram phishing, não sejas a próxima vítima.",
            "atualizar-dispositivo": "🛡️ Mantém os dispositivos atualizados – Atualizações corrigem falhas de segurança.",
            "evitar-wifi-publico": "📡 Evita redes Wi-Fi públicas – Usa uma VPN se precisares de te conectar.",
            "sobre-nos": "Sobre Nós",
            "about-us": "Sobre Nós - Safenet",
            "sobre-us": "Bem-vindo à SafeNet, o teu portal dedicado à cibersegurança e proteção online. Num mundo cada vez mais digital, onde os riscos cibernéticos crescem diariamente, acreditamos que a informação é a melhor defesa.",
            "mais-sobre-nos": "A nossa missão é fornecer dicas, ferramentas e conhecimentos essenciais para garantir que todos possam navegar na internet de forma segura. Desde evitar ataques de phishing, até criar senhas fortes e usar autenticação de dois fatores (2FA), queremos ajudar-te a proteger a tua privacidade e os teus dados.",
            "credits": "Fontes e Créditos",
            "mais-credits": "Para a criação do nosso conteúdo, utilizámos informações de diversos sites especializados em cibersegurança, tais como:",
             "agradecimentos": "Agradecemos a estas fontes por disponibilizarem informação útil e relevante, ajudando a tornar a internet um lugar mais seguro para todos.",
             "kevin-mitnick-titulo": "1️⃣ O Caso de Kevin Mitnick – O Hacker Mais Procurado dos EUA (1995)",
             "kevin-mitnick-detalhes": "🔹 O que aconteceu? Kevin Mitnick, um dos hackers mais famosos da história, invadiu redes de grandes empresas como a IBM, a Nokia e a Motorola, onde roubou softwares e informações confidenciais. Foi preso em 1995 pelo FBI, após anos a fugir das autoridades.",
            "kevin-mitnick-impacto": "🔹 Impacto: O seu caso levou a debates sobre leis de cibersegurança, e, posteriormente, Mitnick tornou-se consultor de segurança informática.",
            "psn-attack-titulo": "2️⃣ O Ataque ao PlayStation Network (2011)",
            "psn-attack-detalhes": "🎮 O que aconteceu? Hackers invadiram a PlayStation Network (PSN) da Sony, comprometendo os dados pessoais de 77 milhões de utilizadores. A rede ficou fora do ar por quase um mês.",
            "psn-attack-impacto": "🔹 Impacto: A Sony sofreu grandes prejuízos e foi forçada a melhorar as suas práticas de segurança, além de oferecer compensações aos utilizadores.",
            "wannacry-titulo": "3️⃣ WannaCry – O Ataque Global de Ransomware (2017)",
            "wannacry-detalhes": "💻 O que aconteceu? O ransomware WannaCry infectou mais de 200.000 computadores em 150 países, bloqueando arquivos e exigindo pagamento em Bitcoin para liberá-los.",
            "wannacry-impacto": "🔹 Impacto: O ataque atingiu hospitais, empresas e até governos, expondo falhas críticas no Windows. Acredita-se que tenha sido conduzido por hackers da Coreia do Norte.",
            "anonymous-payback-titulo": "4️⃣ O Caso do Anonymous e a Operação Payback (2010-2011)",
            "anonymous-payback-detalhes": "👺 O que aconteceu? O grupo hacker Anonymous lançou ataques de negação de serviço (DDoS) contra empresas como PayPal, Visa e Mastercard, depois dessas empresas cortarem financiamento para o WikiLeaks.",
            "anonymous-payback-impacto": "🔹 Impacto: O grupo tornou-se uma figura central no hacktivismo global, atacando governos e corporações em defesa da liberdade digital.",
            "wannacry-credits": "Créditos do vídeo: <a href='https://www.youtube.com/watch?v=cZ543_0bjbw' target='_blank'>WannaCry – O Ataque Global de Ransomware (2017) | Canal: [Nome do Canal]</a>"
        },
        en: {
            "noticias-famosas": "Digital Invasions: The Most Impactful Cyber Attacks",
            "site-title": "Safenet",
            "welcome": "Welcome to Safenet!",
            "slogan": "Your priority should always be your safety.",
            "menu-proteger": "How to Protect Yourself Online",
            "menu-nao-fazer": "What Not to Do Online",
            "nao-fazer-on": "What NOT to do Online ❌",
            "perigo": "The internet can be a dangerous place if you're not careful. Many people fall for scams, lose access to their accounts, or even expose personal information without realizing the risk. To protect yourself, it's essential to know what NOT to do. Small mistakes can lead to big problems, such as identity theft, fraud, or even cyberbullying. Follow these tips and browse more safely, the internet is full of dangers. Protect yourself and keep your data secure with these essential tips.",
            "nao-enviar-fotos": "📸 Do not send photos or private information – You never know who might use it against you.",
            "nao-partilhar-vida": "💬 Do not share too much about your life – What you post today could affect you tomorrow.",
            "nao-acreditar-fake-news": "🎭 Do not believe everything you see online – Fake news spreads quickly, always verify sources.",
            "proteger-online": "How to Protect Yourself Online 🔒",
            "perigos-online": "The internet is full of dangers. The internet is full of risks, and your privacy may be at risk without you realizing it. Be careful with what you share online, as personal information can be used against you. Social networks, forums, and even online games can be sources of exposure if you don’t properly control who has access to your data. Additionally, be wary of friend requests or messages from strangers, as they may hide malicious intentions. It is also essential to question the validity of the information you come across, as fake news spreads quickly and can manipulate your opinion. Protect yourself and keep your data secure with these essential tips.",
            "usar-senha": "🔑 Use Strong Passwords – Never repeat the same password in different accounts!",
            "ativar-2fa": "💬 Don't Share too much about YOUR life – What you post today can affect you tomorrow!",
            "evitar-links": "⚠️ Avoid Suspicious Links – Hackers love phishing, don't be the next victim!",
            "atualizar-dispositivo": "🛡️ Keep Your Devices Updated – Updates fix security flaws.",
            "evitar-wifi-publico": "📡 Avoid Public Wi-Fi Networks – Use a VPN if you need to connect.",
            "sobre-nos": "About Us",
            "about-us": "About Us - Safenet",
            "sobre-us": "Welcome to Safenet, your portal dedicated to cybersecurity and online protection. In a world getting more digital everyday, where the risks online get bigger daily, we believe that the best defense is knowledge",
            "mais-sobre-nos": "Our mission is to provide essential tips, tools, and knowledge to ensure everyone can navigate the internet safely. From avoiding phishing attacks to creating strong passwords and using two-factor authentication (2FA), we want to help you protect your privacy and data.",
            "credits": "Sources and Credits",
            "mais-credits": "For the creation of our content, we used information from various specialized cybersecurity sites, such as:",
             "agradecimentos": "We thank these sources for providing useful and relevant information, helping to make the internet a safer place for everyone.",
             "kevin-mitnick-titulo": "1️⃣ The Case of Kevin Mitnick – The Most Wanted Hacker in America (1995)",
            "kevin-mitnick-detalhes": "🔹 What happened? Kevin Mitnick, one of the most famous hackers in history, infiltrated networks of major companies such as IBM, Nokia, and Motorola, stealing software and confidential information. He was arrested in 1995 by the FBI after years of evading authorities.",
            "kevin-mitnick-impacto": "🔹 Impact: His case led to debates about cybersecurity laws, and Mitnick later became a security consultant.",
            "psn-attack-titulo": "2️⃣ The PlayStation Network Attack (2011)",
            "psn-attack-detalhes": "🎮 What happened? Hackers infiltrated Sony's PlayStation Network (PSN), compromising the personal data of 77 million users. The network was offline for almost a month.",
            "psn-attack-impacto": "🔹 Impact: Sony suffered major losses and was forced to improve its security practices, offering compensations to users.",
            "wannacry-titulo": "3️⃣ WannaCry – The Global Ransomware Attack (2017)",
            "wannacry-detalhes": "💻 What happened? The WannaCry ransomware infected over 200,000 computers in 150 countries, locking files and demanding Bitcoin payment for their release.",
            "wannacry-impacto": "🔹 Impact: The attack hit hospitals, companies, and even governments, exposing critical flaws in Windows. It is believed to have been conducted by hackers from North Korea.",
            "anonymous-payback-titulo": "4️⃣ The Case of Anonymous and Operation Payback (2010-2011)",
            "anonymous-payback-detalhes": "👺 What happened? The hacker group Anonymous launched Distributed Denial of Service (DDoS) attacks against companies like PayPal, Visa, and Mastercard after they cut funding to WikiLeaks.",
            "anonymous-payback-impacto": "🔹 Impact: The group became a central figure in global hacktivism, attacking governments and corporations in defense of digital freedom.",
            "wannacry-credits": "Video Credits: <a href='https://www.youtube.com/watch?v=cZ543_0bjbw' target='_blank'>WannaCry – The Global Ransomware Attack (2017) | Channel: [Channel Name]</a>"
        },
    
            
            
        
    };

    // Função para alternar idioma
    function alternarIdioma() {
        idiomaAtual = idiomaAtual === "pt" ? "en" : "pt";

        for (const key in traducoes[idiomaAtual]) {
            const elemento = document.getElementById(key);
            if (elemento) {
                elemento.textContent = traducoes[idiomaAtual][key];
            }
        }

        // Alternar a bandeira
        const bandeira = document.getElementById("flag-button");
        if (bandeira) {
            bandeira.src = idiomaAtual === "pt" ? "bandeira-ingles.png" : "bandeira-portugal.png";
            bandeira.alt = idiomaAtual === "pt" ? "English" : "Português";
        }
    }

    // Adiciona um event listener para alternar o idioma
    const botaoBandeira = document.getElementById("flag-button");
    if (botaoBandeira) {
        botaoBandeira.addEventListener("click", alternarIdioma);
    } else {
        console.error("Elemento com ID 'flag-button' não encontrado.");
    }



   

   
    const quizData = [
        {
            question: "Qual é a melhor maneira de criar uma senha segura?",
            answers: [
                "Usar a mesma senha em todos os sites", /* Resposta Errada */
                "Criar uma senha longa e única para cada conta", /* Resposta Certa */
                "Utilizar apenas números e letras" /* Resposta Errada */
            ],
            correct: 1
        },
        {
            question: "O que é phishing?",
            answers: [
                "Um ataque de engenharia social para roubo de dados",  /* Resposta Certa */
                "Um vírus que afeta computadores", /* Resposta Errada */
                "Um sistema de proteção contra hackers" /* Resposta Errada */
            ],
            correct: 0
        },
        {
            question: "Porque deves ativar a autenticação de dois fatores (2FA)?",
            answers: [
                "Para impedir que hackers acessem a tua conta mesmo que saibam a tua senha",  /* Resposta Certa */
                "Para facilitar o login sem precisar de senha", /* Resposta Errada */
                "Não é necessário ativar" /* Resposta Errada */
            ],
            correct: 0
        },
        {
            question: "O que deves evitar ao ligar-te a uma rede Wi-Fi pública?",
            answers: [
                "Fazer login no banco online ou sites sensíveis", /* Resposta Certa */
                "Ver vídeos no YouTube", /* Resposta Errada */
                "Ler notícias" /* Resposta Errada */
            ],
            correct: 0
        },
        {
            question: "Qual destes é um exemplo de um ataque cibernético?",
            answers: [
                "SQL Injection", /* Resposta Certa */
                "Firewall", /* Resposta Errada */
                "VPN" /* Resposta Errada */
            ],
            correct: 0
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const nextButton = document.getElementById("next-btn");
    const resultElement = document.getElementById("result");
    const restartButton = document.getElementById("restart-btn"); // Botão de reiniciar

    function loadQuestion() {
        clearAnswers();
        let currentQuestion = quizData[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;

        currentQuestion.answers.forEach((answer, index) => {
            const button = document.createElement("button");
            button.classList.add("answer");
            button.textContent = answer;
            button.onclick = () => selectAnswer(index);
            answersElement.appendChild(button);
        });
    }

    function selectAnswer(index) {
        const correctIndex = quizData[currentQuestionIndex].correct;
        const buttons = document.querySelectorAll(".answer");

        buttons.forEach((button, i) => {
            button.disabled = true;
            if (i === correctIndex) {
                button.classList.add("correct");
            } else if (i === index) {
                button.classList.add("wrong");
            }
        });

        if (index === correctIndex) {
            score++;
        }

        nextButton.style.display = "block";
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
            nextButton.style.display = "none";
        } else {
            showResult();
        }
    }

    function showResult() {
        questionElement.textContent = "Quiz Finalizado!"; 
        answersElement.innerHTML = `Pontuação: ${score} de ${quizData.length}`; // Aparece a pontuação
        nextButton.style.display = "none";
        restartButton.style.display = "block"; // Mostrar o botão de reiniciar
    }

    function clearAnswers() {
        answersElement.innerHTML = "";
    }

    // Inicializa o quiz oculto
    const quizContainer = document.querySelector('.quiz-container');
    quizContainer.style.display = 'none';

    // Exibe o quiz quando o botão é clicado
    const quizzesBtn = document.getElementById('quizzes-btn');
    if (quizzesBtn) {
        quizzesBtn.addEventListener('click', function (e) {
            e.preventDefault();
            quizContainer.style.display = quizContainer.style.display === 'none' ? 'block' : 'none';
            loadQuestion();
        });
    }

    // Evento para o botão "Próxima Pergunta"
    nextButton.addEventListener("click", nextQuestion);

    // Função para reiniciar o quiz
    function restartQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.style.display = "none";
        restartButton.style.display = "none";
        loadQuestion();
    }

    // Evento para o botão de reiniciar
    if (restartButton) {
        restartButton.addEventListener("click", restartQuiz);
    }
    
})
   