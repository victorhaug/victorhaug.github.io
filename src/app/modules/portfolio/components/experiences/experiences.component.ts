import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Software Developer',
        p: 'IBM | Set 2022 - Present',
      },
      text: '<p>Banco Do Brasil</p><p> Desenvolvimento de sistema.Realizando criações front-end em Angular para melhor a experiencia do usuário e desenvolvendo micro serviços Java 11 e 17</p>',
    },
    {
      summary: {
        strong: 'Analista de Sistemas Jr',
        p: 'BRQ |  mai 2021 - Jun 2022',
      },
      text: '<p>ITAU</p><p>Desenvolvimento Full Stack em Angular 5 a 9 e Node.js, C#, TypeScript. Atuando tambem com COBOL, DB2 e Java 11</p>',
    },
    {
      summary: {
        strong: 'Técnico de Sistema Jr',
        p: 'BRQ | Jun 2020 - Jun 2021',
      },
      text: '<p>Desenvolvimento Full Stack em Angular 5 a 9 e Node.js, C#, TypeScript. Atuando em criação de programas em COBOL na divisão de dados de clientes.</p> <p>SDK TURISMO — Desenvolvimento de sistema em Java que realiza pagamento em Dólar através de solicitações realizada pelo app e retirada direto no caixa eletrônico.</p>',
    },
    {
      summary: {
        strong: 'Estagiário',
        p: 'BRQ | Jul 2019 - Jun 2020',
      },
      text: 'PORTAL ITAU - Mudança de layout no portal com alterações em Angular 6 e .Net framework , cujo o propósito é melhorar a experiência na navegação pelo sistema.',
    },
  ]);
}
