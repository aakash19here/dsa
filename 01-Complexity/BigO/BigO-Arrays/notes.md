<h1>Arrays</h1>

<h3>Ordered lists!</h3>  

<h1>When to use Array</h1>
<p 
style="font-size:1.2rem;font-weight:normal">
• When you need order
</p>
<p 
style="font-size:1.2rem;font-weight:normal">
• When you need fast access / insertion and removal (sort of....)
</p>
<h1>Time Complexity of Arrays</h1>
<p style="font-size:1.4rem">
Insertion - It depends....
</p>
<p>
> Adding element at last of the array is no big deal 
<br>
> But adding element at start of array would mess up indexing of rest of the elements ,and thus it has a time complexity of O(n) 
</p>
<p style="font-size:1.4rem;">
Removal - It depends....
</p>
<p>
> Removing element at last of the array is no big deal 
<br>
> But removing  element at start of array would mess up indexing of rest of the elements,and thus it has a time complexity of O(n) 
</p>
<h3>Push/Pop always is better than shift/unshift</h3> 
<p style="font-size:1.4rem">
Searching - O(n)
</p>
<p style="font-size:1.4rem">
Access - O(1)
</p>
<p> > While accessing data in an array if you have the right index of that element you can jump directly to it , array would't go through every single element in it.
<br>
> Thats why it has constant time complexity while accessing the data
</p>
<h1>Time Complexity of Array Operations</h1>
<p style="font-size:1.4rem">push - O(1)</p>
<p style="font-size:1.4rem">pop - O(1)</p>
<p style="font-size:1.4rem">shift - O(N)</p>
<p style="font-size:1.4rem">unshift - O(N)</p>
<p style="font-size:1.4rem">concat -   (N)</p>
<p style="font-size:1.4rem">slice -   O(N)</p>
<p style="font-size:1.4rem">splice -   O(N)</p>
<p style="font-size:1.4rem">sort -   O(N * log N)</p>
<p style="font-size:1.4rem">forEach/map/filter/reduce/etc. - O(N)</p>