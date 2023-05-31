import {FaDatabase} from 'react-icons/fa'
import {AiOutlineHtml5} from 'react-icons/ai'
import {GiTiedScroll} from 'react-icons/gi'
import {DiRuby} from 'react-icons/di'
import {DiJavascript} from 'react-icons/di'
import {DiNodejs} from 'react-icons/di'


export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: "/about-grassroot"
    },/*
    {
        name: "Register",
        path: 'https://www.grassroot.academy/signup'
    }, 
    {
        name: "Login",
        path: 'https://learn.grassroot.academy/sign_in'
    },*/
]

export const programs = [
    {
        id: 1,
        icon: <DiRuby/>,
        title: "RUBY",
    },
    {
        id: 2,
        icon: <FaDatabase/>,
        title: "DATABASES",
    },
    {
        id: 3,
        icon: <DiRuby/>,
        title: "RUBY ON RAILS",
    },
    {
        id: 4,
        icon: <DiJavascript/>,
        title: "JAVASCRIPT",
    },
    {
        id: 5,
        icon: <AiOutlineHtml5/>,
        title: "INTERMEDIATE HTML AND CSS",
    },
    {
        id: 6,
        icon: <AiOutlineHtml5/>,
        title: "ADVANCED HTML AND CSS",
    },
    {
        id: 7,
        icon: <DiNodejs/>,
        title: "NODEJS",
    },
    {
        id: 8,
        icon: <GiTiedScroll/>,
        title: "GETTING HIRED",
    },
]

