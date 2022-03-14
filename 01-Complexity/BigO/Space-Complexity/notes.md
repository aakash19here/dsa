<h1>Space Complexity</h1>
<h3>So far, we've been focusing on time complexity: how can we analyze the runtime of an algorithm as the size of the inputs increases?</h3>
<hr>
<h1>What about inputs ? </h1>
<p>Sometimes you'll hear the term auxiliary space complexity to refer to space required by the algorithm, not including space taken up by the inputs.</p>
<p>Unless otherwise noted, when we talk about space complexity, technically we'll be talking about auxiliary space complexity.</p>
<hr>
<h1>Space Complexity in JS</h1>
<li>Most primitives (booleans, numbers, undefined, null) are constant space
<li>Strings require O(n) space (where n is the string length)
<li>Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)