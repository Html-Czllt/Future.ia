
document.addEventListener('DOMContentLoaded', () => {
    const home = document.getElementById('home');
    const narrative = document.getElementById('narrative');
    const endScreen = document.getElementById('end-screen');
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const narrativeText = document.getElementById('narrative-text');
    const choicesContainer = document.getElementById('choices-container');
    const optionsContainer = document.getElementById('options-container');

    const story = [
         // Passo 1
         {
            text: "Você está liderando um projeto de implementação de inteligência artificial em sua empresa. A IA promete aumentar a eficiência e reduzir custos, mas também levanta preocupações sobre privacidade e perda de empregos. Como você abordará essa situação?",
            choices: [
                { text: "Investir em IA para melhorar a eficiência e competir no mercado.", nextStep: 1 },
                { text: "Realizar uma análise detalhada dos impactos sociais e econômicos da IA antes de prosseguir.", nextStep: 2 },
                { text: "Adotar uma postura neutra e aguardar mais informações sobre o impacto da IA antes de tomar uma decisão.", nextStep: 3 }
            ]
        },
        // Passo 2
        {
            text: "Você decidiu realizar uma análise detalhada dos impactos da IA. A pesquisa revela tanto benefícios quanto desafios significativos. O que fazer a seguir?",
            choices: [
                { text: "Implementar IA gradualmente, monitorando seus impactos e ajustando conforme necessário.", nextStep: 4 },
                { text: "Revisar e atualizar políticas de privacidade e segurança para proteger dados e funcionários.", nextStep: 5 },
                { text: "Desenvolver um plano de comunicação para informar a todos os stakeholders sobre os riscos e benefícios.", nextStep: 6 }
            ]
        },
        // Passo 3
        {
            text: "Você optou por adotar uma postura neutra. A empresa enfrenta pressões externas e internas sobre o uso de IA. Qual é o próximo passo?",
            choices: [
                { text: "Promover debates internos e externos sobre o uso ético da IA e suas implicações.", nextStep: 7 },
                { text: "Reavaliar a postura e considerar a implementação de IA com medidas de mitigação para os riscos identificados.", nextStep: 8 },
                { text: "Continuar a monitorar tendências e novas informações sobre IA para uma decisão futura.", nextStep: 9 }
            ]
        },
        // Passo 4
        {
            text: "Você decidiu implementar IA gradualmente. A introdução inicial é bem-sucedida, mas surgem preocupações sobre a segurança dos dados. O que fazer agora?",
            choices: [
                { text: "Aumentar as medidas de segurança e realizar auditorias regulares.", nextStep: 10 },
                { text: "Solicitar feedback dos funcionários sobre a eficácia das novas medidas de segurança.", nextStep: 11 },
                { text: "Investir em treinamento contínuo para a equipe sobre segurança e uso da IA.", nextStep: 12 }
            ]
        },
        // Passo 5
        {
            text: "Você revisou e atualizou as políticas de privacidade. As novas políticas são bem recebidas, mas há resistência a mudanças. Qual é o próximo passo?",
            choices: [
                { text: "Organizar sessões de treinamento e workshops para funcionários sobre as novas políticas.", nextStep: 13 },
                { text: "Estabelecer um canal de comunicação para responder a dúvidas e preocupações sobre as mudanças.", nextStep: 14 },
                { text: "Implementar um período de transição para facilitar a adaptação às novas políticas.", nextStep: 15 }
            ]
        },
        // Passo 6
        {
            text: "Você desenvolveu um plano de comunicação sobre os impactos da IA. A comunicação está clara, mas a aceitação entre os funcionários ainda é baixa. O que fazer agora?",
            choices: [
                { text: "Realizar sessões de esclarecimento e workshops para aumentar a compreensão e aceitação.", nextStep: 16 },
                { text: "Estabelecer um programa de feedback para ouvir e responder às preocupações dos funcionários.", nextStep: 17 },
                { text: "Oferecer incentivos para engajar funcionários no processo de adaptação à IA.", nextStep: 18 }
            ]
        },
        // Passo 7
        {
            text: "Você promoveu debates sobre o uso ético da IA. A discussão gerou novas ideias, mas há ainda muitos pontos de vista divergentes. Qual é o próximo passo?",
            choices: [
                { text: "Formar um comitê para avaliar e integrar diferentes perspectivas sobre o uso ético da IA.", nextStep: 19 },
                { text: "Realizar uma pesquisa adicional para entender melhor as preocupações e preferências dos stakeholders.", nextStep: 20 },
                { text: "Desenvolver um código de ética para o uso de IA na empresa, incorporando feedback das discussões.", nextStep: 21 }
            ]
        },
        // Passo 8
        {
            text: "Você reconsiderou a postura e está implementando IA com medidas de mitigação. A implementação é bem recebida, mas surgem novos desafios. O que fazer agora?",
            choices: [
                { text: "Ajustar as medidas de mitigação com base nos novos desafios.", nextStep: 22 },
                { text: "Engajar especialistas para revisar e melhorar as medidas de mitigação.", nextStep: 23 },
                { text: "Comunicar os ajustes e melhorias realizadas à equipe para manter a transparência.", nextStep: 24 }
            ]
        },
        // Passo 9
        {
            text: "Você está monitorando tendências sobre IA. Descobre que outras empresas estão enfrentando desafios semelhantes. O que fazer agora?",
            choices: [
                { text: "Participar de grupos de discussão e fóruns sobre IA para compartilhar e aprender com experiências de outras empresas.", nextStep: 25 },
                { text: "Colaborar com outras empresas para desenvolver soluções compartilhadas para desafios comuns.", nextStep: 26 },
                { text: "Manter a estratégia atual e ajustar conforme novas informações e tendências surgem.", nextStep: 27 }
            ]
        },
        // Passo 10
        {
            text: "Você aumentou as medidas de segurança e realizou auditorias. O sistema está mais seguro, mas a integração com outros sistemas ainda enfrenta problemas. Qual é o próximo passo?",
            choices: [
                { text: "Desenvolver soluções técnicas para melhorar a integração com outros sistemas.", nextStep: 28 },
                { text: "Revisar os protocolos de integração e ajustar conforme necessário.", nextStep: 29 },
                { text: "Buscar consultoria especializada para resolver problemas complexos de integração.", nextStep: 30 }
            ]
        },
        // Passo 11
        {
            text: "Você solicitou feedback dos funcionários sobre as novas medidas de segurança. O feedback é positivo, mas há sugestões para melhorias. O que fazer agora?",
            choices: [
                { text: "Implementar as melhorias sugeridas e comunicar as mudanças aos funcionários.", nextStep: 31 },
                { text: "Realizar uma nova rodada de feedback para ajustar ainda mais as medidas.", nextStep: 32 },
                { text: "Reconhecer e valorizar as sugestões dos funcionários, mantendo a comunicação aberta.", nextStep: 33 }
            ]
        },
        // Passo 12
        {
            text: "Você investiu em treinamento contínuo sobre IA. A equipe está mais preparada, mas o treinamento precisa ser atualizado. Qual é o próximo passo?",
            choices: [
                { text: "Atualizar o conteúdo do treinamento com as últimas inovações e melhores práticas em IA.", nextStep: 34 },
                { text: "Expandir o treinamento para incluir novos membros da equipe e partes interessadas.", nextStep: 35 },
                { text: "Avaliar a eficácia do treinamento e ajustar conforme necessário.", nextStep: 36 }
            ]
        },
        // Passo 13
        {
            text: "Você organizou sessões de treinamento sobre as novas políticas. A maioria dos funcionários está adaptando bem, mas alguns ainda têm dúvidas. O que fazer agora?",
            choices: [
                { text: "Oferecer suporte individualizado para funcionários com dúvidas persistentes.", nextStep: 37 },
                { text: "Realizar sessões de esclarecimento adicionais para abordar as dúvidas comuns.", nextStep: 38 },
                { text: "Revisar as políticas com base no feedback recebido durante o treinamento.", nextStep: 39 }
            ]
        },
        // Passo 14
        {
            text: "Você estabeleceu um canal de comunicação para responder a dúvidas sobre novas políticas. A adesão é boa, mas há questões não resolvidas. Qual é o próximo passo?",
            choices: [
                { text: "Contratar especialistas para resolver questões complexas e técnicas.", nextStep: 40 },
                { text: "Expandir o canal para incluir sessões de Q&A com especialistas.", nextStep: 41 },
                { text: "Ajustar as políticas com base nas dúvidas e questões recorrentes.", nextStep: 42 }
            ]
        },
        // Passo 15
        {
            text: "Você implementou um período de transição para as novas políticas. A adaptação está ocorrendo, mas a resistência persiste. O que fazer agora?",
            choices: [
                { text: "Reforçar a comunicação e o suporte durante o período de transição.", nextStep: 43 },
                { text: "Reavaliar as políticas e considerar ajustes para reduzir a resistência.", nextStep: 44 },
                { text: "Organizar reuniões regulares para abordar preocupações e fornecer atualizações.", nextStep: 45 }
            ]
        }
        // Passos adicionais a partir do 46 em diante devem seguir a mesma estrutura de desenvolvimento.
    ];

    let currentStep = 0;

    function startGame() {
        home.style.display = 'none';
        narrative.style.display = 'block';
        showStep(currentStep);
    }

    function showStep(step) {
        const currentStory = story[step];
        narrativeText.textContent = currentStory.text;
        choicesContainer.innerHTML = '';
        if (currentStory.choices) {
            currentStory.choices.forEach((choice) => {
                const button = document.createElement('button');
                button.textContent = choice.text;
                button.addEventListener('click', () => handleChoice(choice.nextStep));
                choicesContainer.appendChild(button);
            });
        }
    }

    function handleChoice(nextStep) {
        if (nextStep >= story.length) {
            showEndScreen();
        } else {
            currentStep = nextStep;
            showStep(currentStep);
        }
    }

    function showEndScreen() {
        narrative.style.display = 'none';
        endScreen.style.display = 'block';
    }

    function restartGame() {
        endScreen.style.display = 'none';
        home.style.display = 'block'; // Exibe a tela inicial
        currentStep = 0; // Reinicia o passo do jogo
    }

    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', restartGame);
});
