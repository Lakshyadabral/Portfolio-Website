import { SectionHeader } from "@/components/SectionHeader";
import {Card} from "@/components/Card"
import StarIcon from '@/assets/icons/star.svg'
import bookImage from '@/assets/images/book-cover.png'
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg'
import TypescriptIcon from '@/assets/icons/typescript.svg'
import ReactIcon from '@/assets/icons/react.svg'
import NodeIcon from '@/assets/icons/node.svg'
import MongoDb from '@/assets/icons/mongodb.svg'
import SqlIcon from '@/assets/icons/sql.svg'
import TailwindIcon from '@/assets/icons/tailwind.svg'
import ExpressIcon from '@/assets/icons/express.svg'
import HtmlIcon from '@/assets/icons/html5.svg'
import CssIcom from '@/assets/icons/css3.svg'
import GithubIcon from '@/assets/icons/github.svg'
import BootstrapIcon from '@/assets/icons/bootstrap.svg'
import NextIcon from '@/assets/icons/next.svg'
import { TechIcon } from "@/components/TechIcon";
import mapImage from '@/assets/images/map.png'
import smileMemoji from '@/assets/images/memoji-smile.png'
import { title } from "process";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HtmlIcon,
  },
{
  title: 'CSS3',
  iconType: CssIcom,
},
{
  title: 'React',
  iconType: ReactIcon,
},
{
  title: 'Node',
  iconType: NodeIcon,
},
{
title: 'Typescript',
iconType: TypescriptIcon,
},
{
  title: 'Express',
  iconType: ExpressIcon,
},
{
  title: 'Next',
  iconType: NextIcon,
},
{
  title: 'MongoDB',
  iconType: MongoDb,
  },
  {
    title: 'SQL',
    iconType: SqlIcon,
    },
    {
      title: 'Tailwind',
      iconType: TailwindIcon,
    },
      {
        title: 'Bootstrap',
        iconType: BootstrapIcon,
      },
      {
        title: 'Github',
        iconType: GithubIcon,
      }
  ]

  const hobbies = [
    {
      title: 'Dancing',
      emoji: '🕺',
      left: '5%',
      top: '5%',
    }, 
    {
      title: 'Singing',
      emoji: "🎤",
      left: '50%',
      top: '5%',
      
    },
    {
      title: 'Cooking',
      emoji: '🍳',
      left: '35%',
      top: '40%',
    }, 
    {
      title: 'Gaming',
      emoji: "🎮",
      left: '10%',
      top: '35%',
    },
    

    {
      title: 'Soccer',
      emoji: '⚽',
      left: '70%',
      top: '45%',
    }, 
    {
      title: 'Fitness',
      emoji: "💪",
      left: '5%',
      top: '65%',
    },

    {
      title: 'Reading',
      emoji: '📖',
      left: '45%',
      top: '70%',
    },

  ]

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
      <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do, and what inspires me"/>
      <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
        <Card className= "h-[320px] md:col-span-2 lg:col-span-1">
        <CardHeader title="My Reads" description="Explore the manga that inspire my journey" />
        <div className="w-40 mx-auto mt-2 md:mt-0 ">
        <Image src={bookImage} alt="Book Cover"/>
        </div>
        </Card>

        <Card className = "h-[320px] md:col-span-3 lg:col-span-2">
        <CardHeader title="My Toolbox" description="Explore the technologies and tools i used to craft exceptional digital experiences" className="" />
          <ToolboxItems items={toolboxItems} className="" />
          <ToolboxItems items={toolboxItems} className=""itemsWrapperClassName= "-translate-x-1/2"/>

       </Card>
       </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-5 gap-8">
        <Card className = "h-[320px] p-0 flex flex-col col-span-3 lg:col-span-2">
        <CardHeader title="Beyond The Code" description="Explore my intrestes and hobbies beyond the digital realm " 
        className="px-6 py-6"/>

              <div className="relative flex-1"> 
              {hobbies.map (hobby => (
              <div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={
              {left:hobby.left,
                top: hobby.top,
              }}
              >
                <span className="font-medium text-gray-950">{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </div>
            ))}
              </div>
                  
              </Card>

          <Card className= "h-[320px] p-0 relative sm:col-span-3  md:col-span-2 lg:col-span-1" >
          <Image src={mapImage} alt="map" 
          className="h-full w-full object-cover object-left-top"/>
          <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30" >
          <Image src={smileMemoji} alt="smiling memoji" className="size-20 mt-1.5"/>
          </div>
        </Card>
        </div>

      </div>
    </div>
  </div>

  ) 
};
