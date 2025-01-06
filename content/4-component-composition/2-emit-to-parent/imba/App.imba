import {AnswerButton} from "./AnswerButton.imba";

tag App

	def answerYes 
		isHappy = yes

	def answerNo
		isHappy = no 
		
	<self>
		<AnswerButton @yes=answerYes @no=answerNo>
		<p [fs:50px]> isHappy ? "😀" : "😥"

imba.mount <App>		