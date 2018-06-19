import { Injectable } from '@angular/core';
import { Subject } from '../models/subject';

@Injectable()
export class SubjectService {

  constructor() { }

  public currentSemester: Subject[] = [
    {
      title: 'Machine Learning',
      shortTitle: 'ML',
      color: 'orange',
      course: '5.5',
      seminar: '8.0',
      teachers: ['Liviu Ciortuz'],
      optional: false,
      description: 'Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. Machine learning focuses on the development of computer programs that can access data and use it learn for themselves.',
    },
    {
      title: 'Artificial Intelligence',
      shortTitle: 'AI',
      color: 'purple',
      course: '8.0',
      seminar: '9.0',
      teachers: ['Dan Cristea'],
      optional: false,
      description: 'Artificial intelligence (AI), the ability of a digital computer or computer-controlled robot to perform tasks commonly associated with intelligent beings. The term is frequently applied to the project of developing systems endowed with the intellectual processes characteristic of humans, such as the ability to reason, discover meaning, generalize, or learn from past experience.'
    },
    {
      title: 'Python',
      shortTitle: 'PY',
      color: 'blue',
      course: '7.2',
      seminar: '9.5',
      teachers: ['Dragos Gavrilut'],
      optional: false,
      description: 'Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. '
    },
    {
      title: '.NET Introduction',
      shortTitle: '.NET',
      color: 'cyan',
      course: '8.6',
      seminar: '9.0',
      teachers: ['Florin Olariu'],
      optional: true,
      description: '.NET is both a business strategy from Microsoft and its collection of programming support for what are known as Web services, the ability to use the Web rather than your own computer for various services. Microsoft\'s goal is to provide individual and business users with a seamlessly interoperable and Web - enabled interface for applications and computing devices and to make computing activities increasingly Web browser-oriented.The.NET platform includes servers; building-block services, such as Web-based data storage; and device software.It also includes Passport, Microsoft\'s fill-in-the-form-only-once identity verification service.'
    },
    {
      title: 'Operating Systems Special Chapters',
      shortTitle: 'OSSC',
      color: 'pink',
      course: '9.2',
      seminar: '10.0',
      teachers: ['Cristian Vidrascu'],
      optional: true,
      description: 'Programming using Windows kernel, the central module of an operating system (OS). It is the part of the operating system that loads first, and it remains in main memory. Because it stays in memory, it is important for the kernel to be as small as possible while still providing all the essential services required by other parts of the operating system and applications. The the kernel code is usually loaded into a protected area of memory to prevent it from being overwritten by programs or other parts of the operating system. Typically, the kernel is responsible for memory management, process and task management, and disk management'

    },
    {
      title: 'Information Security',
      shortTitle: 'IS',
      color: 'green',
      course: '6.4',
      seminar: '7.0',
      teachers: ['Laurentiu Tiplea'],
      optional: false,
      description: 'Information Security is the practice of preventing unauthorized access, use, disclosure, disruption, modification, inspection, recording or destruction of information. Information security\'s primary focus is the balanced protection of the confidentiality, integrity and availability of data(also known as the CIA triad) while maintaining a focus on efficient policy implementation, all without hampering organization productivity. To standardize this discipline, academics and professionals collaborate and seek to set basic guidance, policies, and industry standards on password, antivirus software, firewall, encryption software, legal liability and user / administrator training standards.'
    },
  ];

  public leftovers: Subject[] = [
    {
      title: 'Mathematics',
      shortTitle: 'MA',
      color: 'purple',
      course: '4.0',
      seminar: '5.3',
      teachers: ['Florin Iacob'],
      optional: false,
      description: ' The study of numbers, equations, functions, and geometric shapes (see geometry) and their relationships. Some branches of mathematics are characterized by use of strict proofs based on axioms. Some of its major subdivisions are arithmetic, algebra, geometry, and calculus.'
    },
  ];

}
