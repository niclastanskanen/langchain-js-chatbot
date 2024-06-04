// import 'dotenv/config'

// import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
// import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
// import { OpenAIEmbeddings } from "@langchain/openai";
// import { createClient } from "@supabase/supabase-js";

// import fs from 'fs/promises'


// // @supabase/supabase-js
// try {
//     // const result = await fetch('scrimba-info.txt')

//     const text = await fs.readFile('scrimba-info.txt', 'utf8')

//     const splitter = new RecursiveCharacterTextSplitter({
//         chunkSize: 500,
//         chunkOverlap: 50,
//         separators: ['\n\n', '\n', ' ', ''] // default setting
//     })
    
//     const output = await splitter.createDocuments([text])
    
//     const sbApiKey = process.env.SUPABASE_API_KEY
//     const sbUrl = process.env.SUPABASE_URL_CHATBOT
//     const openAIApiKey = process.env.OPENAI_API_KEY
    
//     const client = createClient(sbUrl, sbApiKey)
    
//     await SupabaseVectorStore.fromDocuments(
//         output,
//         new OpenAIEmbeddings({ openAIApiKey }),
//         {
//            client,
//            tableName: 'documents',
//         }
//     )
    
// } catch (err) {
//     console.log(err)
// }

// document.addEventListener('submit', (e) => {
//     e.preventDefault()
//     progressConversation()
// })

// const openAIApiKey = process.env.OPENAI_API_KEY



// async function progressConversation() {
//     const userInput = document.getElementById('user-input')
//     const chatbotConversation = document.getElementById('chatbot-conversation-container')
//     const question = userInput.value
//     userInput.value = ''

//     // add human message
//     const newHumanSpeechBubble = document.createElement('div')
//     newHumanSpeechBubble.classList.add('speech', 'speech-human')
//     chatbotConversation.appendChild(newHumanSpeechBubble)
//     newHumanSpeechBubble.textContent = question
//     chatbotConversation.scrollTop = chatbotConversation.scrollHeight

//     // add AI message
//     const newAiSpeechBubble = document.createElement('div')
//     newAiSpeechBubble.classList.add('speech', 'speech-ai')
//     chatbotConversation.appendChild(newAiSpeechBubble)
//     newAiSpeechBubble.textContent = result
//     chatbotConversation.scrollTop = chatbotConversation.scrollHeight
// }

// import { ChatOpenAI } from "@langchain/openai";
// import { PromptTemplate } from "langchain/prompts";

// const openAIApiKey = process.env.OPENAI_API_KEY

// const llm = new ChatOpenAI({ openAIApiKey })

// const tweetTemplate = 'Generate a promotional tweet for a product, from this product description: {productDesc}'

// const tweetPrompt = PromptTemplate.fromTemplate(tweetTemplate)

// console.log(tweetPrompt)

// import { ChatOpenAI } from "langchain/chat_models/openai"
// import { PromptTemplate } from "langchain/prompts"

// document.addEventListener('submit', (e) => {
//     e.preventDefault()
//     progressConversation()
// })

// const openAIApiKey = process.env.OPENAI_API_KEY
// const llm = new ChatOpenAI({ openAIApiKey })

// /**
//  * Challenge:
//  * 1. Create a prompt to turn a user's question into a 
//  *    standalone question. (Hint: the AI understands 
//  *    the concept of a standalone question. You don't 
//  *    need to explain it, just ask for it.)
//  * 2. Create a chain with the prompt and the model.
//  * 3. Invoke the chain remembering to pass in a question.
//  * 4. Log out the response.
//  * **/

// // A string holding the phrasing of the prompt
// const standaloneQuestionTemplate = 'Given a question, convert it to a standalone question. question: {question} standalone question:'

// // A prompt created using PromptTemplate and the fromTemplate method
// const standaloneQuestionPrompt = PromptTemplate.fromTemplate(standaloneQuestionTemplate)

// // Take the standaloneQuestionPrompt and PIPE the model
// const standaloneQuestionChain = standaloneQuestionPrompt.pipe(llm)

// // Await the response when you INVOKE the chain. 
// // Remember to pass in a question.
// const response = await standaloneQuestionChain.invoke({
//     question: 'What are the technical requirements for running Scrimba? I only have a very old laptop which is not that powerful.'
// })

// console.log(response)

// async function progressConversation() {
//     const userInput = document.getElementById('user-input')
//     const chatbotConversation = document.getElementById('chatbot-conversation-container')
//     const question = userInput.value
//     userInput.value = ''

//     // add human message
//     const newHumanSpeechBubble = document.createElement('div')
//     newHumanSpeechBubble.classList.add('speech', 'speech-human')
//     chatbotConversation.appendChild(newHumanSpeechBubble)
//     newHumanSpeechBubble.textContent = question
//     chatbotConversation.scrollTop = chatbotConversation.scrollHeight

//     // add AI message
//     const newAiSpeechBubble = document.createElement('div')
//     newAiSpeechBubble.classList.add('speech', 'speech-ai')
//     chatbotConversation.appendChild(newAiSpeechBubble)
//     newAiSpeechBubble.textContent = result
//     chatbotConversation.scrollTop = chatbotConversation.scrollHeight
// }

// import { ChatOpenAI } from "langchain/chat_models/openai"
// import { PromptTemplate } from "langchain/prompts"
// import { SupabaseVectorStore } from "langchain/vectorstores/supabase"
// import { OpenAIEmbeddings } from "langchain/embeddings/openai"
// import { createClient } from "@supabase/supabase-js"
// import { StringOutputParser } from 'langchain/schema/output_parsers'

// document.addEventListener('submit', (e) => {
//     e.preventDefault()
//     progressConversation()
// })

// const openAIApiKey = process.env.OPENAI_API_KEY

// const embeddings = new OpenAIEmbeddings({ openAIApiKey })
// const sbApiKey = process.env.SUPABASE_API_KEY
// const sbUrl = process.env.SUPABASE_URL_LC_CHATBOT
// const client = createClient(sbUrl, sbApiKey)

// const vectorStore = new SupabaseVectorStore(embeddings, {
//     client,
//     tableName: 'documents',
//     queryName: 'match_documents'
// })

// const retriever = vectorStore.asRetriever()

// const llm = new ChatOpenAI({ openAIApiKey })

// const standaloneQuestionTemplate = 'Given a question, convert it to a standalone question. question: {question} standalone question:'

// const standaloneQuestionPrompt = PromptTemplate.fromTemplate(standaloneQuestionTemplate)

// const chain = standaloneQuestionPrompt.pipe(llm).pipe(new StringOutputParser).pipe(retriever)

// const response = await chain.invoke({
//     question: 'What are the technical requirements for running Scrimba? I only have a very old laptop which is not that powerful.'
// })

// console.log(response)

// async function progressConversation() {
//     const userInput = document.getElementById('user-input')
//     const chatbotConversation = document.getElementById('chatbot-conversation-container')
//     const question = userInput.value
//     userInput.value = ''

//     // add human message
//     const newHumanSpeechBubble = document.createElement('div')
//     newHumanSpeechBubble.classList.add('speech', 'speech-human')
//     chatbotConversation.appendChild(newHumanSpeechBubble)
//     newHumanSpeechBubble.textContent = question
//     chatbotConversation.scrollTop = chatbotConversation.scrollHeight

//     // add AI message
//     const newAiSpeechBubble = document.createElement('div')
//     newAiSpeechBubble.classList.add('speech', 'speech-ai')
//     chatbotConversation.appendChild(newAiSpeechBubble)
//     newAiSpeechBubble.textContent = result
//     chatbotConversation.scrollTop = chatbotConversation.scrollHeight
// }

// import { ChatOpenAI } from 'langchain/chat_models/openai'
// import { PromptTemplate } from 'langchain/prompts'
// import { StringOutputParser } from 'langchain/schema/output_parser'
// import { retriever } from '/utils/retriever'
// import { combineDocuments } from '/utils/combineDocuments'

// document.addEventListener('submit', (e) => {
//     e.preventDefault()
//     progressConversation()
// }) 

// const openAIApiKey = process.env.OPENAI_API_KEY
// const llm = new ChatOpenAI({ openAIApiKey })

// const standaloneQuestionTemplate = 'Given a question, convert it to a standalone question. question: {question} standalone question:'

// const standaloneQuestionPrompt = PromptTemplate.fromTemplate(standaloneQuestionTemplate)

// const answerTemplate = `You are a helpful and enthusiastic support bot who can answer a given question about Scrimba based on the context provided. Try to find the answer in the context. If you really don't know the answer, say "I'm sorry, I don't know the answer to that." And direct the questioner to email help@scrimba.com. Don't try to make up an answer. Always speak as if you were chatting to a friend.
// context: {context}
// question: {question}
// answer: 
// `

// const answerPrompt = PromptTemplate.fromTemplate(answerTemplate)

// const chain = standaloneQuestionPrompt.pipe(llm).pipe(new StringOutputParser()).pipe(retriever).pipe(combineDocuments).pipe(answerPrompt)

// const response = await chain.invoke({
//     question: 'What are the technical requirements for running Scrimba? I only have a very old laptop which is not that powerful.'
// })

// console.log(response)

// async function progressConversation() {
//     const userInput = document.getElementById('user-input')
//     const chatbotConversation = document.getElementById('chatbot-conversation-container')
//     const question = userInput.value
//     userInput.value = ''

//     // add human message
//     const newHumanSpeechBubble = document.createElement('div')
//     newHumanSpeechBubble.classList.add('speech', 'speech-human')
//     chatbotConversation.appendChild(newHumanSpeechBubble)
//     newHumanSpeechBubble.textContent = question
//     chatbotConversation.scrollTop = chatbotConversation.scrollHeight

//     // add AI message
//     const newAiSpeechBubble = document.createElement('div')
//     newAiSpeechBubble.classList.add('speech', 'speech-ai')
//     chatbotConversation.appendChild(newAiSpeechBubble)
//     newAiSpeechBubble.textContent = result
//     chatbotConversation.scrollTop = chatbotConversation.scrollHeight
// }

// import { ChatOpenAI } from 'langchain/chat_models/openai'
// import { PromptTemplate } from 'langchain/prompts'
// import { StringOutputParser } from 'langchain/schema/output_parser'
// import { RunnableSequence } from "langchain/schema/runnable"

// const openAIApiKey = process.env.OPENAI_API_KEY
// const llm = new ChatOpenAI({ openAIApiKey })

// const punctuationTemplate = `Given a sentence, add punctuation where needed. 
//     sentence: {sentence}
//     sentence with punctuation:  
//     `
// const punctuationPrompt = PromptTemplate.fromTemplate(punctuationTemplate)

// const grammarTemplate = `Given a sentence correct the grammar.
//     sentence: {punctuated_sentence}
//     sentence with correct grammar: 
//     `
// const grammarPrompt = PromptTemplate.fromTemplate(grammarTemplate)

// const chain = RunnableSequence.from([
//     punctuationPrompt,
//     llm,
//     new StringOutputParser(),
//     {punctuated_sentence: prevResult => prevResult},
//     grammarPrompt,
//     llm,
//     new StringOutputParser(),
// ])

// const response = await chain.invoke({
//     sentence: 'i dont liked mondays',
//     language: 'french'
// })

// console.log(response)


// import { ChatOpenAI } from 'langchain/chat_models/openai'
// import { PromptTemplate } from 'langchain/prompts'
// import { StringOutputParser } from 'langchain/schema/output_parser'
// import { RunnableSequence, RunnablePassthrough } from "langchain/schema/runnable"

// const openAIApiKey = process.env.OPENAI_API_KEY
// const llm = new ChatOpenAI({ openAIApiKey })

// const punctuationTemplate = `Given a sentence, add punctuation where needed. 
//     sentence: {sentence}
//     sentence with punctuation:  
//     `
// const punctuationPrompt = PromptTemplate.fromTemplate(punctuationTemplate)

// const grammarTemplate = `Given a sentence correct the grammar.
//     sentence: {punctuated_sentence}
//     sentence with correct grammar: 
//     `
// const grammarPrompt = PromptTemplate.fromTemplate(grammarTemplate)

// const translationTemplate = `Given a sentence, translate that sentence into {language}
//     sentence: {grammatically_correct_sentence}
//     translated sentence:
//     `
// const translationPrompt = PromptTemplate.fromTemplate(translationTemplate)

// const punctuationChain = RunnableSequence.from([
//     punctuationPrompt,
//     llm,
//     new StringOutputParser()
// ])
// const grammarChain = RunnableSequence.from([
//     grammarPrompt,
//     llm,
//     new StringOutputParser()
// ])
// const translationChain = RunnableSequence.from([
//     translationPrompt,
//     llm,
//     new StringOutputParser()
// ])

// const chain = RunnableSequence.from([
//     {
//         punctuated_sentence: punctuationChain,
//         original_input: new RunnablePassthrough()
//     },
//     {
//         grammatically_correct_sentence: grammarChain,
//         language: ({ original_input }) => original_input.language
//     },
//     translationChain
// ])

// const response = await chain.invoke({
//     sentence: 'i dont liked mondays',
//     language: 'french'
// })

// console.log(response)
import { ChatOpenAI } from 'langchain/chat_models/openai'
import { PromptTemplate } from 'langchain/prompts'
import { StringOutputParser } from 'langchain/schema/output_parser'
import { retriever } from '/utils/retriever'
import { combineDocuments } from '/utils/combineDocuments'
import { RunnablePassthrough, RunnableSequence } from "langchain/schema/runnable"
import { formatConvHistory } from '/utils/formatConvHistory'

document.addEventListener('submit', (e) => {
    e.preventDefault()
    progressConversation()
})

const openAIApiKey = process.env.OPENAI_API_KEY
const llm = new ChatOpenAI({ openAIApiKey })

const standaloneQuestionTemplate = `Given some conversation history (if any) and a question, convert the question to a standalone question. 
conversation history: {conv_history}
question: {question} 
standalone question:`
const standaloneQuestionPrompt = PromptTemplate.fromTemplate(standaloneQuestionTemplate)

const answerTemplate = `You are a helpful and enthusiastic support bot who can answer a given question about Scrimba based on the context provided and the conversation history. Try to find the answer in the context. If the answer is not given in the context, find the answer in the conversation history if possible. If you really don't know the answer, say "I'm sorry, I don't know the answer to that." And direct the questioner to email help@scrimba.com. Don't try to make up an answer. Always speak as if you were chatting to a friend.
context: {context}
conversation history: {conv_history}
question: {question}
answer: `
const answerPrompt = PromptTemplate.fromTemplate(answerTemplate)

const standaloneQuestionChain = standaloneQuestionPrompt
    .pipe(llm)
    .pipe(new StringOutputParser())

const retrieverChain = RunnableSequence.from([
    prevResult => prevResult.standalone_question,
    retriever,
    combineDocuments
])
const answerChain = answerPrompt
    .pipe(llm)
    .pipe(new StringOutputParser())

const chain = RunnableSequence.from([
    {
        standalone_question: standaloneQuestionChain,
        original_input: new RunnablePassthrough()
    },
    {
        context: retrieverChain,
        question: ({ original_input }) => original_input.question,
        conv_history: ({ original_input }) => original_input.conv_history
    },
    answerChain
])

const convHistory = []

async function progressConversation() {
    const userInput = document.getElementById('user-input')
    const chatbotConversation = document.getElementById('chatbot-conversation-container')
    const question = userInput.value
    userInput.value = ''

    // add human message
    const newHumanSpeechBubble = document.createElement('div')
    newHumanSpeechBubble.classList.add('speech', 'speech-human')
    chatbotConversation.appendChild(newHumanSpeechBubble)
    newHumanSpeechBubble.textContent = question
    chatbotConversation.scrollTop = chatbotConversation.scrollHeight
    const response = await chain.invoke({
        question: question,
        conv_history: formatConvHistory(convHistory)
    })
    convHistory.push(question)
    convHistory.push(response)

    // add AI message
    const newAiSpeechBubble = document.createElement('div')
    newAiSpeechBubble.classList.add('speech', 'speech-ai')
    chatbotConversation.appendChild(newAiSpeechBubble)
    newAiSpeechBubble.textContent = response
    chatbotConversation.scrollTop = chatbotConversation.scrollHeight
}