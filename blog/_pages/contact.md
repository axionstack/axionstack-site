---
title: "Contact"
permalink: "/contact.html"
---
<div class='row'>
  <div class='col-md-8'>

  <form action="https://formspree.io/{{site.email}}" method="POST">
  <p class="text-muted mb-4">Please send your feedbacks, thoughts and suggestions. We will reply as soon as possible! <br /><span class='text-sm'>If you prefer email, write to us at awin (AT) snowkite.io</span>
  </p>

  <div class="form-group row">
  <div class="col-md-6">
  <input class="form-control" type="text" name="name" placeholder="Name*" required>
  </div>
  <div class="col-md-6">
  <input class="form-control" type="email" name="_replyto" placeholder="E-mail Address*" required>
  </div>
  </div>
  <textarea rows="8" class="form-control mb-3" name="message" placeholder="Message*" required></textarea>
  <input class="btn btn-success" type="submit" value="Send">
  </form>

  </div>
</div>
