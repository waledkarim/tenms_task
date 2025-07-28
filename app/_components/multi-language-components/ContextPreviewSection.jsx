"use client";


import { useState, useEffect } from "react";
import { useLanguageContext } from "../../_context/LanguageContext";

export default function ContentPreviewSection(){

    const { lang } = useLanguageContext();
    const [data, setData] = useState({});

    useEffect(() => {
        (async function(){
            try {

                const res = await fetch(`https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`, {
                    cache: "no-store",
                });
                const { data: { sections } } = await res.json();
                setData(sections[6]);

            } catch (error) {
                console.error(error);
            }
        })()
    }, [lang]);

    return(
        <div id="content_preview">

            <div class="mb-6">
                
                <div class="flex justify-between w-full">
                    
                    <h2 class="mb-2 text-xl font-semibold md:mb-4">Content preview</h2>

                </div>
                <div class="relative mb-20">

                    <div class="rounded-md md:border md:px-5">

                        <details class="border-b border-dashed last:border-0">
                            <summary class="py-4 font-medium cursor-pointer">
                                <h3 class="font-semibold">Introduction</h3>
                            </summary>
                        </details>

                        <details class="border-b border-dashed last:border-0">
                            <summary class="py-4 font-medium cursor-pointer">
                                <h3 class="font-semibold">IELTS Course by Munzereen Shahid | Exclusive Support Group</h3>
                            </summary>
                        </details>
                        
                        <details class="border-b border-dashed last:border-0">
                            <summary class="py-4 font-medium cursor-pointer">
                                <h3 class="font-semibold">Academic Reading</h3>
                            </summary>
                            <ul>

                                <li class="mb-4 flex ">

                                    <span class="mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" size="24" class="text-[#9CA3AF]"><path fill="currentColor" d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"></path><path fill="#fff" d="M14.217 10.886c.503-.448.503-1.324 0-1.772a17.547 17.547 0 00-5.024-3.166l-.33-.135c-.633-.26-1.3.234-1.386.987a28.617 28.617 0 000 6.4c.085.753.753 1.246 1.386.987l.33-.135a17.548 17.548 0 005.024-3.166z"></path></svg>
                                    </span>

                                    <h4 class="flex-1 text-sm text-gray-500">Video: Reading: Reading Format</h4>

                                </li>
                                
                                <li class="mb-4 flex ">

                                    <span class="mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" size="24" class="text-[#9CA3AF]"><circle cx="10" cy="10" r="10" fill="currentColor"></circle><path fill="#fff" fill-rule="evenodd" d="M7.855 5h4.19c1.545 0 2.405.89 2.405 2.415v5.165c0 1.55-.86 2.42-2.404 2.42H7.855c-1.52 0-2.405-.87-2.405-2.42V7.415C5.45 5.89 6.335 5 7.855 5zm.135 2.33v-.005h1.494a.392.392 0 010 .785H7.99a.39.39 0 010-.78zm0 3.04h3.92a.39.39 0 000-.78H7.99a.39.39 0 000 .78zm0 2.285h3.92c.2-.02.35-.19.35-.39a.392.392 0 00-.35-.395H7.99a.397.397 0 00-.375.605c.08.125.225.2.375.18z" clip-rule="evenodd"></path></svg>
                                    </span>
                                    <h4 class="flex-1 text-sm text-gray-500">Reading - General Idea, Format, Question Types</h4>

                                </li>
                                
                                <li class="mb-4 flex ">

                                    <span class="mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" size="24" class="text-[#9CA3AF]"><path fill="currentColor" d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"></path><path fill="#fff" d="M14.217 10.886c.503-.448.503-1.324 0-1.772a17.547 17.547 0 00-5.024-3.166l-.33-.135c-.633-.26-1.3.234-1.386.987a28.617 28.617 0 000 6.4c.085.753.753 1.246 1.386.987l.33-.135a17.548 17.548 0 005.024-3.166z"></path></svg>
                                    </span>
                                    <h4 class="flex-1 text-sm text-gray-500">Video: Reading: Paragraph Headings</h4>

                                </li>
                                
                                <li class="mb-4 flex ">
                                    <span class="mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" size="24" class="text-[#9CA3AF]"><circle cx="10" cy="10" r="10" fill="currentColor"></circle><path fill="#fff" fill-rule="evenodd" d="M7.855 5h4.19c1.545 0 2.405.89 2.405 2.415v5.165c0 1.55-.86 2.42-2.404 2.42H7.855c-1.52 0-2.405-.87-2.405-2.42V7.415C5.45 5.89 6.335 5 7.855 5zm.135 2.33v-.005h1.494a.392.392 0 010 .785H7.99a.39.39 0 010-.78zm0 3.04h3.92a.39.39 0 000-.78H7.99a.39.39 0 000 .78zm0 2.285h3.92c.2-.02.35-.19.35-.39a.392.392 0 00-.35-.395H7.99a.397.397 0 00-.375.605c.08.125.225.2.375.18z" clip-rule="evenodd"></path></svg>
                                    </span>
                                    <h4 class="flex-1 text-sm text-gray-500">Reading - Matching Headings</h4>
                                </li>
                                
                                <li class="mb-4 flex ">

                                    <span class="mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" size="24" class="text-[#9CA3AF]"><path fill="currentColor" d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"></path><path fill="#fff" d="M14.217 10.886c.503-.448.503-1.324 0-1.772a17.547 17.547 0 00-5.024-3.166l-.33-.135c-.633-.26-1.3.234-1.386.987a28.617 28.617 0 000 6.4c.085.753.753 1.246 1.386.987l.33-.135a17.548 17.548 0 005.024-3.166z"></path></svg>
                                    </span>
                                    <h4 class="flex-1 text-sm text-gray-500">Video: Reading: Multiple Choice Questions</h4>
                                </li>
                                
                                <li class="mb-4 flex ">

                                    <span class="mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" size="24" class="text-[#9CA3AF]"><circle cx="10" cy="10" r="10" fill="currentColor"></circle><path fill="#fff" fill-rule="evenodd" d="M7.855 5h4.19c1.545 0 2.405.89 2.405 2.415v5.165c0 1.55-.86 2.42-2.404 2.42H7.855c-1.52 0-2.405-.87-2.405-2.42V7.415C5.45 5.89 6.335 5 7.855 5zm.135 2.33v-.005h1.494a.392.392 0 010 .785H7.99a.39.39 0 010-.78zm0 3.04h3.92a.39.39 0 000-.78H7.99a.39.39 0 000 .78zm0 2.285h3.92c.2-.02.35-.19.35-.39a.392.392 0 00-.35-.395H7.99a.397.397 0 00-.375.605c.08.125.225.2.375.18z" clip-rule="evenodd"></path></svg>
                                    </span>
                                    <h4 class="flex-1 text-sm text-gray-500">Reading - Multiple Choice</h4>
                                </li>
                                
                                <li class="mb-4 flex ">
                                    
                                    <span class="mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" size="24" class="text-[#9CA3AF]"><path fill="currentColor" d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"></path><path fill="#fff" d="M14.217 10.886c.503-.448.503-1.324 0-1.772a17.547 17.547 0 00-5.024-3.166l-.33-.135c-.633-.26-1.3.234-1.386.987a28.617 28.617 0 000 6.4c.085.753.753 1.246 1.386.987l.33-.135a17.548 17.548 0 005.024-3.166z"></path></svg>
                                    </span>
                                    <h4 class="flex-1 text-sm text-gray-500">Video: Reading: True/False/Not Given</h4>
                                
                                </li>
                                
                                <li class="mb-4 flex ">

                                    <span class="mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" size="24" class="text-[#9CA3AF]"><circle cx="10" cy="10" r="10" fill="currentColor"></circle><path fill="#fff" fill-rule="evenodd" d="M7.855 5h4.19c1.545 0 2.405.89 2.405 2.415v5.165c0 1.55-.86 2.42-2.404 2.42H7.855c-1.52 0-2.405-.87-2.405-2.42V7.415C5.45 5.89 6.335 5 7.855 5zm.135 2.33v-.005h1.494a.392.392 0 010 .785H7.99a.39.39 0 010-.78zm0 3.04h3.92a.39.39 0 000-.78H7.99a.39.39 0 000 .78zm0 2.285h3.92c.2-.02.35-.19.35-.39a.392.392 0 00-.35-.395H7.99a.397.397 0 00-.375.605c.08.125.225.2.375.18z" clip-rule="evenodd"></path></svg>
                                    </span>
                                    <h4 class="flex-1 text-sm text-gray-500">Reading - True/False/Not Given and Yes/No/Not Given Questions</h4>
                                </li>
                                
                                <li class="mb-4 flex "><span class="mr-4"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" size="24" class="text-[#9CA3AF]"><path fill="currentColor" d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"></path><path fill="#fff" d="M14.217 10.886c.503-.448.503-1.324 0-1.772a17.547 17.547 0 00-5.024-3.166l-.33-.135c-.633-.26-1.3.234-1.386.987a28.617 28.617 0 000 6.4c.085.753.753 1.246 1.386.987l.33-.135a17.548 17.548 0 005.024-3.166z"></path></svg></span><h4 class="flex-1 text-sm text-gray-500">Video: Reading: Matching Paragraph Information</h4></li><li class="mb-4 flex "><span class="mr-4"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" size="24" class="text-[#9CA3AF]"><circle cx="10" cy="10" r="10" fill="currentColor"></circle><path fill="#fff" fill-rule="evenodd" d="M7.855 5h4.19c1.545 0 2.405.89 2.405 2.415v5.165c0 1.55-.86 2.42-2.404 2.42H7.855c-1.52 0-2.405-.87-2.405-2.42V7.415C5.45 5.89 6.335 5 7.855 5zm.135 2.33v-.005h1.494a.392.392 0 010 .785H7.99a.39.39 0 010-.78zm0 3.04h3.92a.39.39 0 000-.78H7.99a.39.39 0 000 .78zm0 2.285h3.92c.2-.02.35-.19.35-.39a.392.392 0 00-.35-.395H7.99a.397.397 0 00-.375.605c.08.125.225.2.375.18z" clip-rule="evenodd"></path></svg></span><h4 class="flex-1 text-sm text-gray-500">Reading - Matching Features and Information</h4></li><li class="mb-4 flex "><span class="mr-4"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" size="24" class="text-[#9CA3AF]"><path fill="currentColor" d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"></path><path fill="#fff" d="M14.217 10.886c.503-.448.503-1.324 0-1.772a17.547 17.547 0 00-5.024-3.166l-.33-.135c-.633-.26-1.3.234-1.386.987a28.617 28.617 0 000 6.4c.085.753.753 1.246 1.386.987l.33-.135a17.548 17.548 0 005.024-3.166z"></path></svg></span><h4 class="flex-1 text-sm text-gray-500">Video: Reading: Sentence Completion</h4></li><li class="mb-4 flex "><span class="mr-4"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" size="24" class="text-[#9CA3AF]"><circle cx="10" cy="10" r="10" fill="currentColor"></circle><path fill="#fff" fill-rule="evenodd" d="M7.855 5h4.19c1.545 0 2.405.89 2.405 2.415v5.165c0 1.55-.86 2.42-2.404 2.42H7.855c-1.52 0-2.405-.87-2.405-2.42V7.415C5.45 5.89 6.335 5 7.855 5zm.135 2.33v-.005h1.494a.392.392 0 010 .785H7.99a.39.39 0 010-.78zm0 3.04h3.92a.39.39 0 000-.78H7.99a.39.39 0 000 .78zm0 2.285h3.92c.2-.02.35-.19.35-.39a.392.392 0 00-.35-.395H7.99a.397.397 0 00-.375.605c.08.125.225.2.375.18z" clip-rule="evenodd"></path></svg></span><h4 class="flex-1 text-sm text-gray-500">Reading - Diagram and Flow Chart Completion</h4></li><li class="mb-4 flex "><span class="mr-4"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" size="24" class="text-[#9CA3AF]"><circle cx="10" cy="10" r="10" fill="currentColor"></circle><path fill="#fff" fill-rule="evenodd" d="M7.855 5h4.19c1.545 0 2.405.89 2.405 2.415v5.165c0 1.55-.86 2.42-2.404 2.42H7.855c-1.52 0-2.405-.87-2.405-2.42V7.415C5.45 5.89 6.335 5 7.855 5zm.135 2.33v-.005h1.494a.392.392 0 010 .785H7.99a.39.39 0 010-.78zm0 3.04h3.92a.39.39 0 000-.78H7.99a.39.39 0 000 .78zm0 2.285h3.92c.2-.02.35-.19.35-.39a.392.392 0 00-.35-.395H7.99a.397.397 0 00-.375.605c.08.125.225.2.375.18z" clip-rule="evenodd"></path></svg></span><h4 class="flex-1 text-sm text-gray-500">Reading - Table Completion</h4></li><li class="mb-4 flex "><span class="mr-4"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" size="24" class="text-[#9CA3AF]"><path fill="currentColor" d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"></path><path fill="#fff" d="M14.217 10.886c.503-.448.503-1.324 0-1.772a17.547 17.547 0 00-5.024-3.166l-.33-.135c-.633-.26-1.3.234-1.386.987a28.617 28.617 0 000 6.4c.085.753.753 1.246 1.386.987l.33-.135a17.548 17.548 0 005.024-3.166z"></path></svg></span><h4 class="flex-1 text-sm text-gray-500">Video: Reading: Short Answer Questions</h4></li><li class="mb-4 flex "><span class="mr-4"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" size="24" class="text-[#9CA3AF]"><circle cx="10" cy="10" r="10" fill="currentColor"></circle><path fill="#fff" fill-rule="evenodd" d="M7.855 5h4.19c1.545 0 2.405.89 2.405 2.415v5.165c0 1.55-.86 2.42-2.404 2.42H7.855c-1.52 0-2.405-.87-2.405-2.42V7.415C5.45 5.89 6.335 5 7.855 5zm.135 2.33v-.005h1.494a.392.392 0 010 .785H7.99a.39.39 0 010-.78zm0 3.04h3.92a.39.39 0 000-.78H7.99a.39.39 0 000 .78zm0 2.285h3.92c.2-.02.35-.19.35-.39a.392.392 0 00-.35-.395H7.99a.397.397 0 00-.375.605c.08.125.225.2.375.18z" clip-rule="evenodd"></path></svg></span><h4 class="flex-1 text-sm text-gray-500">Reading - Short Answer</h4></li><li class="mb-4 flex "><span class="mr-4"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" size="24" class="text-[#9CA3AF]"><path fill="currentColor" d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"></path><path fill="#fff" d="M14.217 10.886c.503-.448.503-1.324 0-1.772a17.547 17.547 0 00-5.024-3.166l-.33-.135c-.633-.26-1.3.234-1.386.987a28.617 28.617 0 000 6.4c.085.753.753 1.246 1.386.987l.33-.135a17.548 17.548 0 005.024-3.166z"></path></svg></span><h4 class="flex-1 text-sm text-gray-500">Video: Reading: Gap Fill</h4></li><li class="mb-4 flex "><span class="mr-4"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" size="24" class="text-[#9CA3AF]"><circle cx="10" cy="10" r="10" fill="currentColor"></circle><path fill="#fff" fill-rule="evenodd" d="M7.855 5h4.19c1.545 0 2.405.89 2.405 2.415v5.165c0 1.55-.86 2.42-2.404 2.42H7.855c-1.52 0-2.405-.87-2.405-2.42V7.415C5.45 5.89 6.335 5 7.855 5zm.135 2.33v-.005h1.494a.392.392 0 010 .785H7.99a.39.39 0 010-.78zm0 3.04h3.92a.39.39 0 000-.78H7.99a.39.39 0 000 .78zm0 2.285h3.92c.2-.02.35-.19.35-.39a.392.392 0 00-.35-.395H7.99a.397.397 0 00-.375.605c.08.125.225.2.375.18z" clip-rule="evenodd"></path></svg></span><h4 class="flex-1 text-sm text-gray-500">Reading - Sentence, Summary Completion (Gap Fill Questions)</h4></li>
                            </ul>
                            
                        </details>

                        
                        <details class="border-b border-dashed last:border-0"><summary class="py-4 font-medium cursor-pointer"><h3 class="font-semibold">Academic Reading Mock Test</h3></summary></details><details class="border-b border-dashed last:border-0"><summary class="py-4 font-medium cursor-pointer"><h3 class="font-semibold">Listening</h3></summary></details>
                        
                    </div>
                    
                    <button class="absolute bottom-[-15px] left-1/2 flex translate-x-[-50%] items-center gap-2 rounded-full bg-white px-4 py-1 text-sm text-gray-500 shadow-[0px_0px_17.0361px_#E7EAF7] hover:bg-gray-50 hover:text-gray-700">সকল কন্টেন্ট <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg></button>

                </div>

            </div>


        </div>
    );
}