import { ABOUT_US, HOME, PRICE, PROPERTIES } from "./constant";
import TimeLine from "../assets/images/webp/timeline.webp";
import Trending from "../assets/images/webp/trending.webp";
import Bills from "../assets/images/webp/bills.webp";
import TaskList from "../assets/images/webp/task-list.webp";
import TimeRegistration from "../assets/images/webp/time-registration.webp";
import report from "../assets/images/webp/reports.webp";
import progress from "../assets/images/webp/progress.webp";
import additionalWork from "../assets/images/webp/additional-work.webp";
import salaryCalculator from "../assets/images/webp/salary-calculator.webp";
export const NAVBAR_LIST = [
    {
        text: 'Home',
        path: HOME
    },
    {
        text: 'About us',
        path: ABOUT_US
    },
    {
        text: 'Price',
        path: PRICE
    },
    {
        text: 'Properties',
        path: PROPERTIES
    },
]

export const SYSTEM_APP_LIST = [
    {
        image: TimeLine,
        text: 'Timeline'
    },
    {
        image: Trending,
        text: 'Tendering'
    },
    {
        image: Bills,
        text: 'Bills'
    },
    {
        image: TaskList,
        text: 'Task list'
    },
    {
        image: TimeRegistration,
        text: 'Time registration'
    },
    {
        image: report,
        text: 'Reports'
    },
    {
        image: progress,
        text: 'Progress'
    },
    {
        image: additionalWork,
        text: 'Additional work'
    },
    {
        image: salaryCalculator,
        text: 'Salary calculator'
    },
]


export const BENEFIT_LIST = [
    {
        icon: "friendly",
        title: "User-Friendly Interface",
        description: "With Umsjón, you can create and send quotes on the spot through your phone. The quote goes directly to the customer's inbox with an accept or reject button.This saves time and ensures customers receive quotes immediately.",
    },
    {
        icon: "quote",
        title: "Quote Acceptance and Timeline",
        description: "When a customer accepts a quote, it immediately integrates into Umsjón, where it can be placed on a timeline. The customer receives an email about the date and time the work will take, ensuring transparency and organization.",
    },
    {
        icon: "taskList",
        title: "Task List and Employee Check-In",
        description: "Umsjón includes a task list in the mobile app, where employees check off each completed task. This integrates into Umsjón, allowing the contractor to monitor all employee check-ins and tasks.",
    },
]