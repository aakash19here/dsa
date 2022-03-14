# What's the idea here?
<p style="font-size:1.2rem">
Imagine we have multiple implementations of the same function.
</p>
<p style="font-size:1.2rem">
How can we determine which one is the "best?"
</p>
<h1>Who Cares? </h1>
<p style="font-size:1.2rem">
It's important to have a precise vocabulary to talk about how our code performs
</p>
<p style="font-size:1.2rem">
Useful for discussing trade-offs between different approaches
</p>
<p style="font-size:1.2rem">
When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications
</p>
<h3>An Example</h3>
Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

<h1>The Problem with Time</h1>
<li>Different machines will record different times
<li>The same machine will record different times!
<li>For fast algorithms, speed measurements may not be precise enough?
<hr>
<h1>Introducing....Big O</h1>
<p>1. Big O Notation is a way to formalize fuzzy counting</p>
<p>2. It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow</p>
<p>3. We won't care about the details, only the trends</p>
<hr>
<h1>Big O Definition</h1>
<p>We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases</p>
<li>f(n) could be linear (f(n) = n)
<li>f(n) could be quadratic (f(n) = n^2)
<li>f(n) could be constant (f(n) = 1)
<li>f(n) could be something entirely different!
<hr>
<h1>Simplifying Big O Expressions</h1>
<h3> 1: Constants don't matter</h3>
<p><strike>O(2n)</strike> means O(n)</p>
<p><strike>O(500)</strike> means O(1)</p>
<p><strike>O(13n<sup>2</sup></strike>) means O(n<sup>2</sup>)</p>
<p><strike>O(n+10)</strike> means O(n)</p>
<p><strike>O(1000n+50)</strike> means O(n)</p>
<p><strike>O(n<sup>2</sup>+5n+8)</strike> means O(n<sup>2</sup>)</p>

<h3 style="color:">So in terms of speed</h3>
<h4>O(1) > O(n) > O(n<sup>2</sup>) </h4> 

<hr>
<h1>Big O Shorthands</h1>
<p>1. Arithmatic operations are constants. 
<p>2. Variable assignment are also constants. 
<p>3. Accessing elements in an array (by index) or object (by key) is constant. 
<p>4. In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop
<hr>
<h2>
The general trend is something like
</h2>
<img src="./assets/graph.png">