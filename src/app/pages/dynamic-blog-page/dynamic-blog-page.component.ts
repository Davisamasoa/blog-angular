import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface articleI {
  index?: number;
  title: string;
  textContent: string;
  imgSrc: string;
  date: string;
}

@Component({
  selector: 'app-dynamic-blog-page',
  templateUrl: './dynamic-blog-page.component.html',
  styleUrls: ['./dynamic-blog-page.component.scss'],
})
export class DynamicBlogPageComponent implements OnInit {
  slug: any = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('id');
    console.log(this.slug); // ou faça o que quiser com o slug
  }

  articles: articleI[] = [
    {
      title:
        'From Water to Wellness: Celebrating World Water Day and Its Vital Role in Maintaining Good Oral Health',
      textContent:
        'Today is World Water Day, a day dedicated to raising awareness about the importance of',
      imgSrc:
        'https://unspokensmiles.org/wp-content/uploads/2023/03/10497994_784428474924193_2524283271892447856_o-2.jpg"',
      date: 'March 22, 2023',
    },
    {
      title: 'World Oral Health Day 2023',
      textContent:
        'The power of prevention in fighting oral diseases and maintaining overall health March 20th marks',
      imgSrc:
        'https://unspokensmiles.org/wp-content/uploads/2022/10/21762340_1657835310916834_5469711699618298182_o.jpg',
      date: 'March 20, 2023',
    },
    {
      title:
        'A Gendered Dilemma: The Unspoken Smiles Fellowship as an Avenue of Equality			',
      textContent:
        'Add Your Heading Text Here Unspoken Smiles Fellows | Dominican Republic 2019 Per the United',
      imgSrc:
        'https://unspokensmiles.org/wp-content/uploads/2022/09/jinu8juj.jpeg',
      date: 'September 14, 2022		',
    },
    {
      title:
        'The Totality of Heath: Unspoken Smiles and the Third U.N. Sustainable Development Goal			',
      textContent:
        'The Totality of Health:Unspoken Smiles and the Third U.N Sustainable Development Goal In 2015',
      imgSrc:
        'https://unspokensmiles.org/wp-content/uploads/2022/09/3qserdf.jpeg',
      date: 'September 14, 2022',
    },
    {
      title:
        'The Power of Women: Celebrating the Resilience and Triumphs of Women Everywhere on International Women’s Day			',
      textContent:
        'LAs we celebrate International Women’s Day, it is a time to reflect on the incredible',
      imgSrc:
        'https://unspokensmiles.org/wp-content/uploads/2023/03/Purple-Minimal-International-Womens-Day-Free-Facebook-Cover.png',
      date: 'March 8, 2023',
    },
  ];
}
