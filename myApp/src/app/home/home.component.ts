import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { OnInit } from '@angular/core';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { ProjectsComponent } from '../projects/projects.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, AboutmeComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  htmlContents = [
    'This is <span class="bold bg-gray-700 rounded-md text-violet-500 hover:text-violet-300">Shahrad</span> :) Welcome to my website!',
    '<div class="bg-cyan-300/25 rounded-2xl text-green-300 hover:text-green-700 text-center max-w-sm m-auto text-xl mt-8"><span class="underline decoration-blue-500 text-pink-400/75">print("</span><span class="hover:bg-blue-700/25 rounded-2xl">I am a Machine Learning developer, researcher, and a prev. Intern at Morgan Stanley.</span> <span class="underline decoration-blue-500 text-pink-400/75">")</span> </div>',
    '<div class="bg-cyan-300/25 rounded-2xl text-green-300 hover:text-green-700 text-center max-w-lg m-auto text-xl"><span class="underline decoration-blue-500 text-pink-400/75"> system.out.println("</span><span class="hover:bg-blue-700/25 rounded-2xl" > + oh also looking for a summer 2024 internship in Machine Learning and Data Science. You can safely scroll!</span><span class="underline decoration-blue-500 text-pink-400/75">")</span></div>',
  ];
  projects = [
    {
      image: '../../assets/pictures/moritz-kindler-G66K_ERZRhM-unsplash.jpg',
      name: 'Temporal Collaborative Filtering for Link Prediction in Temporal Graphs',
      description: 'I improved Edgebank for link prediction in temporal graphs by introducing a novel metric, sigma (σ), measuring temporal dynamics. Using PyTorch and SciPy, I implemented a temporal collaborative filtering algorithm capturing both temporal and edge-level dynamics. The paper is under review for the ICLR workshop in February 2024.',
      githubLink: 'https://github.com/EMZEDI/TGB_baseline/settings'
    },
    {
      image: '../../assets/pictures/istockphoto-1486380350-612x612.jpg',
      name: 'Distillation of Transformers with Efficient Mechanisms',
      description: 'We distilled decoder-only transformers like GPT-3 by employing cross-architectural distillation, replacing attention heads with an efficient Hyena mechanism. This led to a remarkable reduction in training time and memory usage, achieving a perplexity score over 40% better than the pre-trained Hyena model. Supervised by Dr. Massaroli from Yoshua Bengio\'s group, the project utilized PyTorch for multi-GPU training and various tools like HuggingFace and Weights and Biases. Currently, the findings are under review for presentation at the ICML 2024 conference.',
      githubLink: 'javascript:void(0)'
    },
    {
      image: '../../assets/pictures/360_F_336903647_0HD6RdVkAdiY9qp7ZCf150lMd2lHKZXB.jpg',
      name: 'Moviefy.AI',
      description: 'I recently built Moviefy.AI, a movie recommendation system using deep collaborative filtering for 1 million users. The project involved containerizing the ML pipeline with Docker, implementing CI/CD using Gitlab and CircleCI, and utilizing Kafka for real-time data updates. I automated versioning with MLFlow and MongoDB, integrated fairness-tracking metrics through Prometheus, and successfully achieved Canary deployment with zero downtime.',
      githubLink: 'javascript:void(0)',
    },
    {image: '../../assets/pictures/fahim-muntashir-14JOIxmsOqA-unsplash.jpg',
    name: 'Happify and Hackify - two Hackathon winners',
    description: 'Developed an AI web app using DeepFace and Cv2 for real-time facial emotion analysis, coupled with Spotify\'s API for personalized song queues. The backend, powered by Flask, concurrently threads face and playlist analysis, while Vue.js handles frontend interactions. Additionally, won first place at CodeML hackathon for achieving 87.37% accuracy and 79.89% F1 score in predicting stroke risk using Scikit-learn, XGBoost, and PyTorch. Check out the projects on GitHub and Devpost (November 2022).',
    githubLink: 'https://github.com/EMZEDI/Happify',},
    // add more projects as needed...
  ];
  skills = {
    languages: ['Python (advanced)', 'Java (advanced)', 'C/C++', 'Typescript', 'SQL', 'MongoDB', 'GraphQL'],
    mlFrameworks: ['Pytorch (CUDA)', 'Tensorflow', 'Keras', 'SciPy', 'Numpy', 'Pandas', 'HuggingFace', 'ScikitLearn'],
    mlopsTools: ['Jupyter and Conda', 'MLFlow', 'Weights and Biases', 'Prometheus', 'CircleCI', 'Gitlab CI/CD', 'Github Workflows', 'Docker', 'Kubernetes', 'AWS', 'Sagemaker', 'Kafka', 'Vector Databases']
  };
  visibleHtmls = ['', '', '', ''];
  restContent = false;

  constructor() {}

  ngOnInit(): void {
    let i = 0;
    let contentIndex = 0;
    let intervalTime = 100; // initial interval time

    const typeContent = () => {
      if (this.htmlContents[contentIndex][i] === '<') {
        while (this.htmlContents[contentIndex][i] !== '>') {
          this.visibleHtmls[contentIndex] += this.htmlContents[contentIndex][i];
          i++;
        }
      }
      this.visibleHtmls[contentIndex] += this.htmlContents[contentIndex][i];
      i++;
      if (i === this.htmlContents[contentIndex].length) {
        i = 0;
        contentIndex++;
        // If the next content is one of the middle two, decrease the interval time
        if (contentIndex === Math.floor(this.htmlContents.length / 2) || contentIndex === Math.floor(this.htmlContents.length / 2) - 1) {
          intervalTime = 50; // adjust this value as needed
        } else {
          intervalTime = 100; // reset the interval time for other elements
        }
        if (contentIndex === this.htmlContents.length) {
          this.restContent = true;
          return;
        }
      }
      setTimeout(typeContent, intervalTime);
    };

    typeContent();
    this.restContent = true;
  }
}
