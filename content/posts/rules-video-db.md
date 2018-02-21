+++
title = "Game video data on calls in games"
date = 2018-02-21T11:36:00+05:30
type = "post"
draft = false
+++

We are trying to create a database of calls in game videos, to help people learn
the rules better. If you'd like to help with this, please add the URL and the
time stamp of where the call occured in it, to [our DB](https://docs.google.com/spreadsheets/d/1mOa4FA3libM_l0PlbU8Jq2HDeDqHoJkEvKsr225fIsw/edit#gid=0).


## On a Desktop/Laptop browser {#on-a-desktop-laptop-browser}

If you are watching the video on a latptop, you can use the bookmarklet. [Drag
and drop](https://youtu.be/qx3NxdjajHk?t=25) the link below (Capture Call) to your bookmarks bar.

<div style="text-align: center;">
    <a style="padding: 10px; border: 1px dashed black;"
       href="javascript: (function() {   var GDOC_URL =     &quot;https://script.google.com/macros/s/AKfycbwSJ8SBv-sWWjsz7uNrx29-7c0GWhk-os0ZsD_bwM_gU_c3TnzQ/exec&quot;;   var player = document.querySelector(&quot;#movie_player&quot;),     time = player.getCurrentTime(),     url = player.getVideoUrl();    player.pauseVideo();   console.log(url, time);    var form = document.createElement(&quot;form&quot;);   form.style.setProperty(&quot;top&quot;, &quot;0px&quot;);   form.style.setProperty(&quot;position&quot;, &quot;absolute&quot;);   form.style.setProperty(&quot;z-index&quot;, &quot;10000&quot;);   form.style.setProperty(&quot;background&quot;, &quot;white&quot;);   form.style.setProperty(&quot;padding&quot;, &quot;5px&quot;);   form.style.setProperty(&quot;width&quot;, &quot;210px&quot;);    var call = document.createElement(&quot;input&quot;);   call.setAttribute(&quot;type&quot;, &quot;text&quot;);   call.setAttribute(&quot;name&quot;, &quot;call&quot;);   call.setAttribute(&quot;id&quot;, &quot;call&quot;);   call.setAttribute(&quot;placeholder&quot;, &quot;Enter call name&quot;);   call.style.setProperty(&quot;width&quot;, &quot;200px&quot;);   form.append(call);    var comment = document.createElement(&quot;textarea&quot;);   comment.setAttribute(&quot;placeholder&quot;, &quot;Additional comments if any... &quot;);   comment.style.setProperty(&quot;width&quot;, &quot;200px&quot;);   comment.style.setProperty(&quot;height&quot;, &quot;300px&quot;);   form.append(comment);    var submit = document.createElement(&quot;button&quot;);   submit.textContent = &quot;Submit&quot;;   form.append(submit);   submit.onclick = function(e) {     e.preventDefault();     submit_data(url, time, call.value, comment.value);     form.remove();   };   submit.style.setProperty(&quot;background&quot;, &quot;lightgreen&quot;);    var cancel = document.createElement(&quot;button&quot;);   cancel.textContent = &quot;X&quot;;   cancel.style.setProperty(&quot;border&quot;, &quot;0px&quot;);   cancel.style.setProperty(&quot;background&quot;, &quot;red&quot;);   cancel.style.setProperty(&quot;float&quot;, &quot;right&quot;);   form.append(cancel);   cancel.onclick = function() {     form.remove();   };    document.body.append(form);    var submit_data = function(url, time, call, comment) {     url = encodeURIComponent(url);     time = encodeURIComponent(time);     call = encodeURIComponent(call);     comment = encodeURIComponent(comment);     var data_url = `${GDOC_URL}?url=${url}&time=${time}&call=${call}&comment=${comment}`;     window.open(data_url);   }; })(); ">
      Capture Call
    </a>
</div>

When you wish to make a note about a call that you are watching on YouTube, you
can click on the bookmarklet (while you are in the video tab), enter some
information, and click submit. The data will get automatically submitted. This
opens a new tab, that you can close and continue watching the video.


## On other devices {#on-other-devices}

Unfortunately, on other devices, you will have to manually enter this data into
this [Google sheet](https://docs.google.com/spreadsheets/d/1mOa4FA3libM_l0PlbU8Jq2HDeDqHoJkEvKsr225fIsw/edit#gid=0).
