const questions = [
		{
			questionText: 'What food my grandma used to do for me that is not mashed potatoes?',
			answerOptions: [
				{ answerText: 'Beef and fries', isCorrect: false },
				{ answerText: 'Fried shrimp', isCorrect: true },
				{ answerText: 'Chicken wings', isCorrect: false },
				{ answerText: 'Lasagna', isCorrect: false },
			],
		},
		{
			questionText: 'What did I say on my 1st communion confession? ',
			answerOptions: [
				{ answerText: 'I don\'t have sins', isCorrect: true },
				{ answerText: 'I cuss', isCorrect: false },
				{ answerText: 'I\'m bad for my parents', isCorrect: false },
				{ answerText: 'I have thoughts about boys', isCorrect: false },
			],
		},
		{
			questionText: 'What was first car?',
			answerOptions: [
				{ answerText: 'Volkswagen', isCorrect: false },
				{ answerText: 'Fiat', isCorrect: true },
				{ answerText: 'Chevy', isCorrect: false },
				{ answerText: 'BMW', isCorrect: false },
			],
		},
		{
			questionText: 'What is the name of my first school?',
			answerOptions: [
				{ answerText: 'São Paulo', isCorrect: false },
				{ answerText: 'Santo Inácio', isCorrect: false },
				{ answerText: 'São Fernando', isCorrect: true },
				{ answerText: 'São Bento', isCorrect: false },
			],
		},
		{
			questionText: 'I have a scar on my wrist. I told you the story. How did I get it?',
			answerOptions: [
				{ answerText: 'From a car accident', isCorrect: false },
				{ answerText: 'From playing volleyball at school', isCorrect: false },
				{ answerText: 'From a broken store window', isCorrect: true },
				{ answerText: 'From a dog bite', isCorrect: false },
			],
		},
		{
			questionText: 'How many stitches did I have from this scar?',
			answerOptions: [
				{ answerText: '5 stiches', isCorrect: false },
				{ answerText: '3 stiches', isCorrect: true },
				{ answerText: '1 stich', isCorrect: false },
				{ answerText: '2 stiches', isCorrect: false },
			],
		},
		{
			questionText: 'What day of the week I was born?',
			answerOptions: [
				{ answerText: 'Saturday', isCorrect: false },
				{ answerText: 'Sunday', isCorrect: true },
				{ answerText: 'Wednesday', isCorrect: false },
				{ answerText: 'Friday', isCorrect: false },
			],
		},
		{
			questionText: 'What would I change in me if I could?',
			answerOptions: [
				{ answerText: 'My legs', isCorrect: false },
				{ answerText: 'My butt', isCorrect: false },
				{ answerText: 'My hair', isCorrect: true },
				{ answerText: 'My foot', isCorrect: false },
			],
		},
		{
			questionText: 'When I was a kid my grandma used to take me to the beach and after we used to go to a ice cream store. What flavor did I always get?',
			answerOptions: [
				{ answerText: 'Chocolate', isCorrect: false },
				{ answerText: 'Strawberry', isCorrect: false },
				{ answerText: 'Mango', isCorrect: true },
				{ answerText: 'Coconut', isCorrect: false },
			],
		},
		{
			questionText: 'There was a book that influenced me very much during my teenager years. Which one is it?',
			answerOptions: [
				{ answerText: 'A wrinkle in time', isCorrect: false },
				{ answerText: 'Alice in Wonderland', isCorrect: false },
				{ answerText: 'Color me beautiful', isCorrect: true },
				{ answerText: 'My solar sign', isCorrect: false },
			],
		},
		{
			questionText: 'But my favorite books is...?',
			answerOptions: [
				{ answerText: 'The red tent', isCorrect: false },
				{ answerText: 'The Alchemist', isCorrect: false },
				{ answerText: 'The Shack', isCorrect: true },
				{ answerText: 'Harry Potter', isCorrect: false },
			],
		},
		{
			questionText: 'What is my favorite bible verse?',
			answerOptions: [
				{ answerText: 'Proverbs 4:23 Above all else, guard your heart, for everything you do flows from it.', isCorrect: false },
				{ answerText: 'Proverbs 30:5 Every word of God proves true', isCorrect: true },
				{ answerText: 'Matthew 22:39 You shall love your neighbor as yourself.', isCorrect: false },
				{ answerText: 'Isaiah 43:5 Do not be afraid for I am with you.', isCorrect: false },
			],
		},
		{
			questionText: 'During high school I took an entrance exam for a university and I qualified in 4th place. What was the major?',
			answerOptions: [
				{ answerText: 'Communications', isCorrect: false },
				{ answerText: 'Tourism', isCorrect: true },
				{ answerText: 'English', isCorrect: false },
				{ answerText: 'Arts', isCorrect: false },
			],
		},
		{
			questionText: 'After my tonsils surgery, what food did I wanted to eat?',
			answerOptions: [
				{ answerText: 'Ice cream', isCorrect: false },
				{ answerText: 'Soup', isCorrect: false },
				{ answerText: 'Rice and beans', isCorrect: true },
				{ answerText: 'Mashed potatoes', isCorrect: false },
			],
		},
		{
			questionText: 'During a day camping at school I was embarrassed about the lunch my mom packed. What was in it?',
			answerOptions: [
				{ answerText: 'Oranges', isCorrect: true },
				{ answerText: 'Chicken', isCorrect: false },
				{ answerText: 'Hamburguer', isCorrect: false },
				{ answerText: 'Cookies', isCorrect: false },
			],
		},
		{
			questionText: 'My dad had a dog that scratched my face. What breed was it?',
			answerOptions: [
				{ answerText: 'Labrador', isCorrect: false },
				{ answerText: 'German Shepherd', isCorrect: true },
				{ answerText: 'Rottweiler', isCorrect: false },
				{ answerText: 'Mutt', isCorrect: false },
			],
		},
		{
			questionText: 'I’m picky about colors. There’s a color I never liked. Which one is it?',
			answerOptions: [
				{ answerText: 'Red', isCorrect: false },
				{ answerText: 'Green', isCorrect: false },
				{ answerText: 'Yellow', isCorrect: true },
				{ answerText: 'Purple', isCorrect: false },
			],
		},
		{
			questionText: 'There\'s a surgery I would like to do. What is it?',
			answerOptions: [
				{ answerText: 'Eye surgery', isCorrect: true },
				{ answerText: 'Liposuction', isCorrect: false },
				{ answerText: 'Nose surgery', isCorrect: false },
				{ answerText: 'Feet surgery', isCorrect: false },
			],
		},
		{
			questionText: 'What was the name of my monkey?',
			answerOptions: [
				{ answerText: 'Charles', isCorrect: false },
				{ answerText: 'Zumba', isCorrect: false },
				{ answerText: 'Zico', isCorrect: true },
				{ answerText: 'Pele', isCorrect: false },
			],
		},
		{
			questionText: 'When I met my stepfather for the first time, he gave me a gift. What did he give me?',
			answerOptions: [
				{ answerText: 'A doll', isCorrect: false },
				{ answerText: 'A candy', isCorrect: false },
				{ answerText: 'A game', isCorrect: false },
				{ answerText: 'A book', isCorrect: true },
			],
		},
	];

    export { questions }