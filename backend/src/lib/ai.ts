import { Configuration, OpenAIApi } from 'openai';
import { config } from '../config';

const configuration = new Configuration({
    apiKey: config.aiApiKey,
});
const openai = new OpenAIApi(configuration);

export const invokeLLM = async ({ prompt, systemPrompt, jsonSchema }) => {
    const response = await openai.createChatCompletion({
        model: config.aiModel,
        messages: [
            { role: 'user', content: prompt },
            ...(systemPrompt ? [{ role: 'system', content: systemPrompt }] : []),
        ],
        ...(jsonSchema ? { schema: jsonSchema } : {}),
    });
    return response.data;
};