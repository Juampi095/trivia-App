
const categoryMap: { [key: string]: number } = {
    'General Knowledge': 9,
    'Entertainment: Video Games': 15,
    Mythology: 20,
    Vehicles: 28,
};


const fetchQuestions = async (category: string, difficulty: string) => {
    try {
        const categoryId = categoryMap[category]
        const response = await fetch(`https://opentdb.com/api.php?amount=5&category=${categoryId}&difficulty=${difficulty}&type=multiple`
        );
        const data = await response.json()

        if (data.results && data.results.length > 0) {
            return data.results
        } else {
            throw new Error('No questions available for this difficulty/category ')
        }
    } catch (err) {
        throw new Error((err as Error).message || 'Error fetching questions ')
    }
};

const shuffleAnswers = (question: any) => {
    const answers = question.incorrect_answers.concat(question.correct_answer);
    return (answers.sort(() => Math.random() - 0.5));
};

export const TriviaService = {
    fetchQuestions,
    shuffleAnswers
}