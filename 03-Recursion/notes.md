<h2>Objectives</h2>
<p style="font-size:1.2rem">
Define what recursion is and how it can be used 
</p>
<p style="font-size:1.2rem">
Understand the two essential components of a recursive function 
</p>
<p style="font-size:1.2rem">
Visualize the call stack to better debug and unnderstand recursive functions
</p>
<h2>What is Recursion ?</h2>
<p style="font-size:1.2rem">A process (a function in our case) that calls itself .</p>

<h2>Why you should use recursion ?</h2>
<p style="font-size:1.2rem">
Its Everywhere !
</p>
<li>JSON.parse/JSON.stringify
<li> document.getElementById and DOM traversal algorithms
<li>Object traversal
<li>Cleaner alternative to iteration 
<hr>
<li>In almost all program languages there is a built in data structure that manages what happens when functions are invoked 
In JavaScript it is called as Call Stack

<h2>The call stack</h2>
<li>It's a stack data structure 
<li> Any time a function is invoked it is placed (pushed) on the top of the top of the call stack
<li>When JavaScript sees the return keyword or when the function ends , the compiler will remove (pop)

<h2>Applications</h2>
<li>Countdown 
<li>Factorial
