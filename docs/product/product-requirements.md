---
title: Product Requirements
description: The product requirements for the Clearer MVP.
toc_min_heading_level: 2
toc_max_heading_level: 3
---

# The Clearer Product Requirements

This document defines the product requirements for the first version of Clearer.

The Constitution defines why Clearer exists.

The Product Principles define how we build.

The Design Language defines how Clearer should feel.

The Brand Bible defines how Clearer communicates.

This document defines what we are building.

The [Technical Architecture](./technical-architecture.md) defines how we build and operate it.

The first version of Clearer focuses on one problem:

> **Making email easier to manage.**

The MVP is intentionally narrow.

We are not trying to build a complete digital decluttering platform on day one.

We are building the smallest useful version of Clearer that can prove people want a calmer, more satisfying way to manage digital clutter.

---

## 1. Product Overview

Clearer is a decision layer that sits on top of a person's existing digital services.

The first version focuses on email.

Rather than replacing Gmail or Outlook, Clearer helps people make quick, confident decisions about the messages already sitting in their inbox.

Users come to Clearer for short, focused sessions - typically around five minutes.

During a session, Clearer presents groups of emails and helps the user decide what should happen to them.

Users remain in control of every decision.

Clearer can identify patterns, classify content and make recommendations.

It does not make important decisions on the user's behalf.

The goal is not to delete as much as possible.

The goal is to help people feel lighter and more in control of their digital life.

**Five minutes. A clearer digital life.**

---

## 2. Problem Statement

Email is one of the most persistent sources of digital clutter.

People receive newsletters, receipts, notifications, promotions, updates, alerts and personal messages every day.

Over time, these accumulate.

An inbox that has been ignored for several days can quickly become overwhelming.

Traditional email tools provide powerful features for managing this clutter:

- Folders.
- Labels.
- Filters.
- Search.
- Bulk actions.
- Rules.

However, these tools still require people to decide what to do.

The problem is therefore not a lack of functionality.

The problem is the cognitive effort required to use it.

People often know their inbox needs attention, but the perceived effort of cleaning it becomes another task they put off.

Clearer exists to reduce that friction.

Instead of asking:

> "How do I organise my inbox?"

Clearer asks:

> **"What decision would you like to make about these emails?"**

The product turns a large, overwhelming task into a sequence of small decisions.

---

## 3. Product Goals

The MVP has five primary goals.

### 1. Make email cleanup feel manageable.

Turn an overwhelming inbox into small, understandable decisions.

### 2. Make cleanup satisfying.

Create a short, focused experience that feels rewarding without becoming addictive or gamified.

### 3. Keep humans in control.

AI may identify patterns and make recommendations, but the user makes the final decision.

### 4. Build trust.

Make permissions, data usage, AI behaviour and actions transparent.

### 5. Establish a repeatable habit.

Enable users to return for short sessions that gradually keep their inbox under control.

---

### The MVP is successful if

A person who normally avoids cleaning their inbox can open Clearer, spend approximately five minutes making decisions, and leave feeling that their digital life is noticeably clearer.

---

## 4. Target Users

### Primary user

People who:

- Receive a significant amount of email.
- Have accumulated unread or unwanted messages.
- Feel overwhelmed by inbox clutter.
- Avoid traditional inbox management because it feels tedious.
- Want to regain control without spending hours organising email.
- Prefer reviewing recommendations themselves rather than delegating decisions to AI.

### Initial user profile

The initial MVP is designed primarily for individual consumers rather than businesses or teams.

The product assumes that users already have an existing Gmail or Outlook account and want to improve how they manage it.

### Users we are not initially targeting

The MVP is not specifically designed for:

- Enterprise email administration.
- Shared inboxes.
- Customer support teams.
- Marketing teams.
- Complex corporate email workflows.
- Users who want fully automated inbox management.

---

## 5. Core User Experience

Clearer's primary interaction loop is:

**Discover → Review → Decide → Progress → Finish**

### Discover

Clearer identifies emails that may benefit from attention.

These may include:

- Promotional emails.
- Newsletters.
- Receipts.
- Notifications.
- Repeated senders.
- Other recognisable patterns.

### Review

Clearer presents related emails together rather than requiring the user to process their inbox chronologically.

### Decide

The user chooses what should happen.

Possible actions include:

- Keep.
- Archive.
- Delete.
- Organise into a user-created group.

The exact interaction model may evolve, but the underlying principle remains:

> **One decision at a time.**

### Progress

Clearer shows meaningful progress without creating pressure.

For example:

> "You've reviewed 42 emails."

or:

> "Your inbox is a little clearer."

### Finish

A session should have a clear ending.

Clearer should never manufacture additional work simply to extend engagement.

The user should be able to leave feeling that something meaningful was accomplished.

---

## 6. Core Interaction

Clearer's primary interaction is a directional swipe.

Only one email is presented at a time.

Each direction represents a distinct decision:

- **Swipe left — Delete:** Move the email to the provider's Trash/Bin.
- **Swipe right — Keep:** Leave the email in the inbox. If the email is unread, mark it as read.
- **Swipe down — Archive:** Remove the email from the inbox while keeping it in the user's mailbox.
- **Swipe up — Organise:** Assign the email to one user-created group.

The swipe is the primary interaction, but the available actions should always be visible and understandable. Users should never be required to memorise gestures.

The underlying principle is:

> **One email. One decision.**

### Email priority

Clearer operates on the user's Inbox.

All inbox emails are eligible for review, but unread emails are prioritised.

Once all unread emails have been reviewed, Clearer offers the user the option to continue reviewing read emails.

### Undo

Every action should be reversible through an easily accessible Undo control.

Undo reverses the most recent action and returns the email to the review flow.

The underlying interaction model should support an action history so that multiple recent actions can be reversed.

### Deletion

When a user chooses Delete, Clearer moves the email to the provider's Trash/Bin.

Clearer does not permanently delete emails itself.

The email provider remains responsible for its normal retention and recovery policies.

### Groups

Users can create their own groups within Clearer.

An email may belong to zero or one group.

Groups are represented using the email provider's native organisational mechanism, such as Gmail labels.

Groups created in Clearer should remain visible and usable within the user's email provider.

Users retain ownership of their organisation even if they stop using Clearer.

---

## 7. MVP Scope

The Clearer MVP is intentionally narrow.

Its purpose is to validate the core Clearer experience:

> **Can we turn an overwhelming inbox into a series of small, confident decisions?**

The MVP focuses exclusively on email inbox management.

It should provide enough functionality for a user to connect their email account, review their inbox one email at a time, make decisions through simple gestures, organise messages into groups, and finish a short session feeling that their inbox is clearer.

### 7.1 Email Providers

The MVP should support:

- Gmail.

Outlook support is planned for a future release and is not required for the initial MVP.

The architecture should avoid unnecessarily preventing future support for additional providers.

### 7.2 Account Connection

Users must be able to securely connect their Gmail account to Clearer.

The connection experience must clearly explain:

- Why Clearer needs access.
- What Clearer can access.
- What Clearer can and cannot do.
- How the user's data is handled.
- How the user can disconnect their account.

The MVP should request the minimum permissions required to provide the product experience.

### 7.3 Inbox Review

Clearer operates exclusively on the user's inbox.

The MVP should:

- Retrieve emails from the user's inbox.
- Prioritise unread emails.
- Include read emails once the user has finished reviewing unread emails.
- Present one email at a time.
- Provide enough information for the user to make an informed decision.

Clearer should not automatically process emails without the user's decision.

### 7.4 Swipe Actions

The MVP should support four primary swipe actions:

- **Swipe left — Delete**
- **Swipe right — Keep**
- **Swipe down — Archive**
- **Swipe up — Organise**

The actions should also be accessible through visible controls so that the product remains understandable and accessible to users who do not use gestures.

### 7.5 Undo

Users must be able to undo their most recent action.

Undo should:

- Reverse the action performed.
- Return the email to the review flow.
- Be easily accessible immediately after an action.

The underlying system should maintain enough action history to support multiple undos, even if the initial interface exposes only the most recent action.

### 7.6 Groups

Users must be able to create their own groups.

Groups should:

- Have a user-defined name.
- Be available when organising an email.
- Allow an email to belong to zero or one group.
- Map to the email provider's native organisational mechanism, such as Gmail labels.
- Remain visible and usable within Gmail.

Clearer should not create a proprietary organisational system that prevents users from accessing their organisation outside Clearer.

### 7.7 AI-Assisted Classification

The MVP should use AI to assist with identifying patterns and classifying emails.

AI may:

- Identify likely categories.
- Identify repeated senders.
- Identify similar emails.
- Surface potentially useful groups of emails.
- Provide context for recommendations.

AI must not:

- Automatically delete emails.
- Automatically archive emails.
- Automatically organise emails.
- Make irreversible decisions.
- Hide important information from the user.

The user always makes the final decision.

### 7.8 Progress

The MVP should provide simple progress feedback during a session.

Progress may include:

- Number of emails reviewed.
- Number of unread emails remaining.
- Completion of the unread inbox.
- A simple session completion state.

Progress should encourage a sense of achievement without creating pressure, competition or addictive behaviour.

### 7.9 Session Completion

A session should have a clear end.

When the user has reviewed all currently prioritised unread emails, Clearer should acknowledge the achievement and offer the option to continue reviewing read emails.

The user should always be able to stop.

The MVP should never artificially extend a session.

### 7.10 MVP Does Not Include

The following are explicitly outside the initial MVP:

- Outlook support.
- Photo cleaning.
- File cleaning.
- Cloud storage cleaning.
- Calendar cleaning.
- Contacts cleaning.
- Fully automated email cleanup.
- Automatic deletion.
- Automatic categorisation without user review.
- Shared inboxes.
- Enterprise/team functionality.
- Advanced email composition.
- Email sending.
- Replacing the user's existing email client.
- Complex filtering and rule builders.
- Gamification systems such as XP, coins or streaks.
- Social features.
- Advertising.
- Selling or sharing personal email data.

---

## 8. Functional Requirements

The following requirements define the behaviour that must be supported by the Clearer MVP.

Each requirement describes what the product must do, rather than how it should be technically implemented.


### 8.1 Onboarding

Clearer must provide a simple onboarding experience that explains the product before requesting access to the user's email.

The onboarding should communicate:

- What Clearer does.
- Why it needs access to the user's email.
- That the user remains in control of every decision.
- That AI provides recommendations rather than making decisions.
- That actions can be undone where possible.

The onboarding should be brief and should not require users to understand how Clearer works before they can try it.


### 8.2 Connect Email Account

Users must be able to connect their Gmail account securely.

Before granting access, the user should understand:

- Why access is required.
- What information Clearer will access.
- What actions Clearer may perform.
- How their information is handled.

The user must explicitly authorise the connection.

Clearer must not attempt to access an email account without user authorisation.

Users must be able to disconnect their email account from Clearer.


### 8.3 Inbox Retrieval

After successfully connecting an account, Clearer must retrieve eligible emails from the user's inbox.

The MVP should:

- Retrieve emails from the inbox.
- Identify whether emails are read or unread.
- Retrieve the information required to display an email clearly.
- Prioritise unread emails.
- Include read emails after unread emails have been reviewed.

Clearer should not retrieve or process messages from folders outside the inbox unless explicitly required for a user action.


### 8.4 Email Review

Clearer must present one email at a time.

The review screen should provide enough information for the user to understand the message and make a decision.

At minimum, this should include:

- Sender.
- Subject.
- Date/time.
- Relevant email content or preview.

The user should not need to open Gmail separately to understand the email.

The interface should clearly communicate the available actions.

The user should be able to move through emails without returning to an inbox list.


### 8.5 Swipe Actions

The primary interaction for reviewing emails must be directional swiping.

The four swipe directions represent:

| Gesture | Action |
| --- | --- |
| Swipe left | Delete |
| Swipe right | Keep |
| Swipe down | Archive |
| Swipe up | Organise |

The interface should provide clear visual guidance for these actions.

Users should also be able to perform the same actions using visible controls.

This ensures that the core functionality does not depend exclusively on gesture interaction.


### 8.6 Keep

When the user chooses Keep:

- The email remains in the inbox.
- If the email is unread, it should be marked as read.
- The email is removed from the current review queue.
- The next eligible email is presented.

Keep should not modify the email's content.


### 8.7 Archive

When the user chooses Archive:

- The email is removed from the inbox.
- The email remains in the user's mailbox.
- The email is removed from the current review queue.
- The next eligible email is presented.

Archiving must use the email provider's native archive behaviour.


### 8.8 Delete

When the user chooses Delete:

- The email is moved to the email provider's Trash/Bin.
- The email is removed from the current review queue.
- The next eligible email is presented.

Clearer must not permanently delete the email itself.

The user should receive immediate confirmation that the email was moved to Trash/Bin.

An Undo action must be available.


### 8.9 Organise

When the user chooses Organise:

- Clearer must display the user's available groups.
- The user may select an existing group.
- The user may create a new group.
- The email is assigned to the selected group.
- The email remains available within the user's email provider.
- The email is removed from the current review queue.

An email may belong to zero or one Clearer group.

Groups should map to the provider's native organisational system, such as Gmail labels.


### 8.10 Create Group

Users must be able to create a group while reviewing an email.

Creating a group should require:

- A group name.
- Confirmation of the group creation.

Once created, the group should immediately become available for organising the current email.

The new group should also become available for future emails.

Group names should be user-defined.

Clearer should avoid imposing a predefined taxonomy on users.


### 8.11 Undo

After an action is performed, Clearer must provide an easily accessible Undo action.

Undo must reverse the most recent action and return the email to the review flow.

Where technically possible, the original state of the email should be restored.

For example:

- A deleted email should be restored from Trash/Bin.
- An archived email should be returned to the inbox.
- A group assignment should be removed.
- A Keep action should be reversed, including restoring the unread state where appropriate.

The system should maintain an action history that allows multiple recent actions to be reversed.


### 8.12 Review Queue

Clearer must maintain a review queue for the current session.

The queue should:

- Prioritise unread emails.
- Present one email at a time.
- Remove an email after the user makes a decision.
- Reinsert an email when the user chooses Undo.
- Avoid presenting the same email repeatedly within a session unless it has been undone.

The queue should remain stable while the user is actively reviewing emails.


### 8.13 Progress

Clearer should provide meaningful progress information throughout a session.

Progress may include:

- Emails reviewed.
- Unread emails remaining.
- Current session progress.
- Completion of the unread queue.

Progress information must not create pressure or urgency.

The user should never feel that they are racing against a timer or competing against other users.


### 8.14 Unread Inbox Completion

When all prioritised unread emails have been reviewed, Clearer should present a clear completion state.

For example:

> **Your unread inbox is clear.**

The user should then have two choices:

- Finish the session.
- Continue reviewing read emails.

The user should never be automatically moved into the read-email queue.

The completion state should feel like an achievement rather than another demand for attention.


### 8.15 Read Email Review

If the user chooses to continue after completing their unread emails, Clearer should begin presenting read emails from the inbox.

Read emails should use the same review experience and available actions.

The user should be able to end the session at any point.


### 8.16 Session Completion

A session must have a clear ending.

When the user chooses to finish, Clearer should provide a concise summary of the session.

The summary may include:

- Emails reviewed.
- Emails archived.
- Emails deleted.
- Emails organised.
- Remaining unread emails, if applicable.

The summary should focus on progress and clarity rather than encouraging further usage.

The user should be able to leave immediately after viewing the summary.


### 8.17 Session Persistence

If the user leaves Clearer before completing their review:

- Their decisions must remain applied.
- Their progress should be preserved where appropriate.
- They should be able to continue reviewing later.
- Emails already reviewed should not unnecessarily reappear.

Clearer should not require users to complete a session once they have started it.

---

### 8.18 Error Handling

If an action cannot be completed, Clearer must clearly explain what happened.

Error messages should:

- Use plain language.
- Explain whether the user's email was changed.
- Explain what the user can do next.
- Avoid technical error codes unless they are useful to the user.

For example:

> **We couldn't archive this email.**
>
> Nothing has changed. Please try again.

The product should never leave the user uncertain about whether an action succeeded.

---

### 8.19 Connection State

Clearer must clearly communicate the state of the user's email connection.

The user should be able to understand:

- Whether their account is connected.
- Which email account is connected.
- Whether Clearer can currently access it.
- How to disconnect the account.

If the connection expires or access is revoked, Clearer should explain what happened and guide the user through reconnecting.

---

### 8.20 Account Disconnect

Users must be able to disconnect their email account from Clearer.

Disconnecting should:

- Stop Clearer's access to the account.
- Remove the account from the active Clearer session.
- Clearly explain what happens to any Clearer-specific data associated with the account.
- Not delete or modify the user's existing emails.

Disconnecting from Clearer must never require deleting the user's Gmail account or emails.

---

## 9. AI & Classification

AI is used to help people make faster, more confident decisions about their digital clutter.

AI is not an autonomous decision maker.

The user remains responsible for every action taken on their email.

The role of AI is to identify patterns, provide context and make useful recommendations while keeping the user in control.

### 9.1 What AI Can Do

The MVP may use AI to:

- Classify emails by type.
- Identify recurring senders.
- Identify similar emails.
- Identify likely newsletters, promotions, receipts and notifications.
- Detect patterns in how emails are organised.
- Recommend groups for emails.
- Identify emails that may be worth reviewing together.
- Learn from decisions the user has previously made.

AI recommendations should make the user's next decision easier.

They should never create additional uncertainty.


### 9.2 What AI Cannot Do

AI must not independently:

- Delete emails.
- Archive emails.
- Organise emails.
- Mark important emails as read.
- Create groups without user involvement.
- Permanently modify or remove user content.
- Make irreversible decisions.

AI may recommend an action.

The user must explicitly approve it.

> **AI suggests. Humans decide.**

This principle is non-negotiable.


### 9.3 Classification

Clearer should identify useful patterns within the user's inbox.

Possible classifications include:

- Newsletter.
- Promotional.
- Receipt.
- Notification.
- Personal.
- Work.
- Travel.
- Finance.
- Social.
- Other recognisable categories.

Classification should be treated as a recommendation rather than an absolute truth.

For example, Clearer should prefer:

> "This looks like a newsletter."

over:

> "This is a newsletter."

This distinction communicates that AI can be wrong.


### 9.4 Recommendations

Recommendations should provide enough context for the user to understand why they are being made.

For example:

> **These look like newsletters you've previously archived.**

or:

> **You've moved emails from this sender to Shopping 47 times before.**

Recommendations should be based on:

- The content and metadata available to Clearer.
- The user's previous decisions.
- Patterns within the user's inbox.
- The user's existing groups.

Recommendations should never imply certainty where there is uncertainty.


### 9.5 Learning User Preferences

Clearer should learn from the user's decisions over time.

The goal is not to create a generic AI that makes assumptions about everyone.

The goal is to create an assistant that increasingly understands how **this particular user** manages their digital life.

For example:

A user repeatedly moves Amazon receipts into:

> Shopping

Over time, Clearer may recognise this pattern and say:

> **You've moved Amazon receipts to Shopping 47 times. Move this one too?**

The user can then:

- Accept the recommendation.
- Choose a different action.
- Ignore the recommendation.

The user's decision always takes precedence over the AI's recommendation.


### 9.6 Learning Must Not Become Autonomous Action

Learning user preferences must not result in Clearer taking actions without user approval.

For example, if a user has archived every newsletter they have ever reviewed, Clearer may recommend archiving a new newsletter.

It must not automatically archive it.

The distinction is fundamental:

**Learning preferences → Yes.**

**Acting without approval → No.**


### 9.7 Explainability

Users should be able to understand why Clearer made a recommendation.

Explanations should:

- Use plain language.
- Reference meaningful patterns.
- Avoid unnecessary technical detail.
- Clearly communicate uncertainty where appropriate.

Clearer should never display vague explanations such as:

> "AI thinks this is relevant."

Instead, explanations should provide useful context.

For example:

> "This looks similar to newsletters you've archived before."


### 9.8 User Feedback

Users should be able to correct Clearer's recommendations.

When a recommendation is incorrect, the user should be able to make the decision they believe is correct.

That decision may contribute to Clearer's understanding of their preferences.

For example:

Clearer recommends:

> **Shopping**

The user chooses:

> **Receipts**

Clearer should learn that this type of email may belong in Receipts rather than Shopping.

User corrections should take precedence over previous assumptions.


### 9.9 AI Confidence

Clearer should distinguish between high-confidence and low-confidence recommendations.

High-confidence recommendations may be presented more prominently.

Low-confidence recommendations should be presented more cautiously or omitted entirely.

Clearer should prefer:

> "This might be a newsletter."

over making a confident recommendation when the available evidence is weak.

The system should never pretend to know something it does not know.


### 9.10 AI and Personal Data

Email content may contain highly personal information.

AI processing must therefore follow Clearer's Trust & Privacy principles.

Clearer should:

- Minimise the amount of personal information sent for AI processing.
- Only process information necessary to provide the requested functionality.
- Clearly communicate when AI is being used.
- Never use personal email content for AI training without explicit user permission.
- Never sell or share personal email content.
- Protect information throughout processing and storage.

The exact technical implementation of these requirements is defined in the Technical Architecture and Trust & Privacy documentation.


### 9.11 Human Control

At every point where AI influences an email decision, the user must remain able to:

- Understand the recommendation.
- Reject the recommendation.
- Choose a different action.
- Undo the resulting action.

AI should make Clearer feel more helpful.

It should never make Clearer feel less predictable.


### 9.12 AI is an Assistant, Not the Product

AI is a means to an end.

The goal of Clearer is not to demonstrate how intelligent its AI is.

The goal is to help people make small, confident decisions about their digital life.

If a simpler, non-AI solution provides a better experience, Clearer should prefer the simpler solution.

**The intelligence should feel helpful, not impressive.**

---

## 10. Trust, Privacy & Security

Trust is a fundamental part of Clearer's product experience.

People may give Clearer access to some of the most personal information in their digital lives.

That access must be treated as a responsibility, not an entitlement.

Clearer should always make it clear:

- What information it accesses.
- Why it needs that information.
- What it does with that information.
- What it does not do with that information.
- How the user remains in control.

> **Trust is a feature.**

### 10.1 User Control

Users must remain in control of their connection to Clearer.

Users must be able to:

- Connect their email account.
- Understand the permissions they are granting.
- Disconnect their email account.
- Revoke Clearer's access through their email provider.
- Understand what happens to their data when they disconnect.
- Request deletion of their Clearer account and associated data.

Clearer must never make it difficult for a user to leave.

> **We will make leaving Clearer as easy as joining it.**


### 10.2 Minimum Required Access

Clearer should request only the permissions necessary to provide its functionality.

Permissions should be:

- Clearly explained before authorisation.
- Limited to the functionality required.
- Reviewed whenever the product's capabilities change.

Clearer should never request broader access simply because that access is convenient for development.

The principle is:

> **If we don't need access to it, we shouldn't ask for it.**


### 10.3 Read and Write Access

Clearer requires the ability to read email content in order to identify and present messages for review.

Clearer may also require permission to perform user-requested actions such as:

- Marking an email as read.
- Archiving an email.
- Moving an email to Trash/Bin.
- Applying an organisational label or group.

These actions should only occur as the result of an explicit user decision.

Clearer must never use write access as permission to make autonomous decisions.

> **Permission to act is not permission to decide.**


### 10.4 No Autonomous Deletion

Clearer must never permanently delete user content without explicit user action.

When a user chooses Delete, Clearer should use the email provider's normal Trash/Bin mechanism.

Clearer does not create its own permanent deletion system.

The user should always understand what will happen before an action is taken.


### 10.5 Data Minimisation

Clearer should collect and process only the information necessary to provide its functionality.

Where possible:

- Avoid storing complete email content when it is not required.
- Avoid collecting unnecessary metadata.
- Process data only for clearly defined purposes.
- Delete data when it is no longer required.
- Prefer transient processing over permanent storage where appropriate.

The product should be designed around the assumption that personal data is a liability that should be minimised, not an asset to accumulate.


### 10.6 Email Content

Email content may contain:

- Personal conversations.
- Financial information.
- Password resets.
- Travel information.
- Work information.
- Addresses.
- Receipts.
- Other sensitive personal information.

Clearer must therefore treat email content as highly sensitive.

Email content must never be:

- Sold.
- Used for advertising.
- Shared with third parties for unrelated purposes.
- Used to train AI models without explicit user permission.


### 10.7 AI and User Data

AI processing must be transparent.

Users should understand that Clearer may use AI to:

- Classify emails.
- Identify patterns.
- Generate recommendations.
- Learn from user decisions.

Personal email content must not be used to train general AI models without explicit user permission.

Where third-party AI services are used, Clearer must understand and document:

- What data is sent.
- Why it is sent.
- How long it is retained.
- Whether it is used for model training.
- Where the data is processed.
- What security controls are provided.

The specific providers and technical controls are defined in the Technical Architecture and Trust & Privacy documentation.


### 10.8 Encryption

Data must be protected during transmission and storage.

Clearer should use industry-standard encryption for:

- Data transmitted between the user's device and Clearer.
- Data transmitted between Clearer and external services.
- Sensitive information stored by Clearer.

Authentication credentials, tokens and other secrets must never be stored in plaintext.

The specific encryption mechanisms and infrastructure are defined in the Technical Architecture.


### 10.9 Authentication

Users must authenticate with their email provider using the provider's supported authentication mechanisms.

Clearer should not request or store users' email passwords.

Authentication tokens must be:

- Stored securely.
- Scoped to the minimum required permissions.
- Protected from unauthorised access.
- Revoked when the user disconnects their account or access is otherwise no longer required.

Clearer should rely on established provider authentication mechanisms rather than creating its own email credential system.


### 10.10 Transparency

Clearer should make privacy information understandable to ordinary users.

We should avoid presenting privacy information exclusively through lengthy legal or technical language.

Where a user needs to make a decision, the product should explain the relevant information at that moment.

For example, before connecting an email account:

> **Why do we need access?**
>
> Clearer needs access to your inbox so it can show you emails to review and carry out the actions you choose.
>
> Clearer doesn't delete, archive or organise emails without your decision.

Detailed legal and technical information can be provided separately.


### 10.11 User Data Ownership

Users retain ownership of their email and organisational data.

Clearer should not create unnecessary lock-in.

Groups created through Clearer should use the email provider's native organisational mechanisms wherever possible so that the user's organisation remains accessible outside Clearer.

If a user stops using Clearer, their email and existing organisation should remain intact.


### 10.12 Disconnecting and Account Deletion

Disconnecting an email account must stop Clearer's ability to access that account.

Account deletion should provide a clear explanation of:

- What data will be deleted.
- What data will remain with the email provider.
- What actions cannot be reversed.
- When deletion will take place.

Deleting a Clearer account must not delete the user's Gmail or Outlook account.

Clearer should not retain personal data indefinitely after an account has been deleted unless there is a clearly documented legal or security reason to do so.


### 10.13 Security by Default

Security should be considered throughout the product lifecycle.

Clearer should:

- Follow the principle of least privilege.
- Minimise stored personal data.
- Keep dependencies and infrastructure maintained.
- Monitor for security issues.
- Protect secrets and credentials.
- Log security-relevant events appropriately.
- Avoid exposing personal email content through application logs.
- Treat security vulnerabilities seriously and respond to them promptly.

Security should never depend on the user understanding how Clearer works internally.


### 10.14 Trust Before Features

Trust takes priority over convenience.

If a feature requires disproportionately invasive access, creates uncertainty about how personal data is used, or cannot be explained clearly to the user, we should reconsider the feature.

We would rather ship fewer features that people trust than more features that make people uncomfortable.

> **We will build trust before features.**


### 10.15 Trust as a Product Requirement

Trust is not complete when the infrastructure is secure.

The entire experience must reinforce it.

A secure system with confusing permissions is not a trustworthy product.

A private system with unexplained AI behaviour is not a trustworthy product.

A product that gives users control but hides important consequences is not a trustworthy product.

Trust must exist across:

- Product design.
- Authentication.
- Permissions.
- AI.
- Data handling.
- Infrastructure.
- Communication.
- Customer support.

Every part of Clearer should answer the same question:

> **Would a reasonable person feel comfortable trusting us with this?**

---

## 11. User Journey

The first Clearer experience should take a user from uncertainty to a meaningful sense of progress in a short, focused session.

The primary journey is:

**Discover Clearer → Understand → Connect → Prepare → Review → Decide → Complete → Return**

The first session is referred to as an **Inbox Reset**.

An Inbox Reset is a focused session in which the user makes a series of small decisions to bring greater clarity to their inbox.


### 11.1 Discover Clearer

The user arrives at Clearer for the first time.

The product should immediately communicate:

- What Clearer does.
- Why it is different from a traditional email client.
- That the experience is designed around short, focused sessions.
- That the user remains in control.

The core message should be simple:

> **Five minutes. A clearer digital life.**

The user should understand the value of Clearer before being asked to connect their email account.


### 11.2 Understand the Experience

Before connecting an account, Clearer should briefly explain how the product works.

The user should understand that:

1. Clearer looks at their inbox.
2. Clearer identifies emails that may benefit from attention.
3. Clearer presents one email at a time.
4. The user decides what happens to each email.
5. Clearer can learn from those decisions over time.

The user should also understand the four primary actions:

- Delete.
- Keep.
- Archive.
- Organise.

The explanation should be concise.

Users should not need to complete a lengthy tutorial before starting.


### 11.3 Connect Email

The user chooses to connect their Gmail account.

Before authorisation, Clearer clearly explains why access is required and what the user is granting permission to do.

The user completes Google's authentication and authorisation flow.

Clearer should never ask the user for their Gmail password.

After successful authorisation, Clearer confirms that the connection has been established.

For example:

> **You're connected.**

> Let's make your inbox a little clearer.


### 11.4 Prepare the Inbox Reset

After connecting, Clearer prepares the user's inbox for review.

Clearer identifies:

- Total inbox messages.
- Unread inbox messages.
- Read inbox messages.
- Potentially useful patterns within the inbox.

Unread emails are prioritised.

The user should not be presented with a complex configuration screen.

The product should do the preparation automatically and move quickly into the experience.

For example:

> **You have 327 unread emails.**

> Let's start with those.

The user can begin their first Inbox Reset.


### 11.5 Begin the Inbox Reset

The first email is presented.

Only one email appears at a time.

The interface clearly communicates the available actions:

- **Swipe left — Delete**
- **Swipe right — Keep**
- **Swipe down — Archive**
- **Swipe up — Organise**

The user can also use visible controls instead of swiping.

The experience should feel intuitive without requiring the user to remember instructions.


### 11.6 Make Decisions

The user reviews each email and makes a decision.

After every decision:

1. The selected action is applied.
2. The email leaves the current review queue.
3. Progress is updated.
4. The next email appears.

The transition between emails should feel immediate and natural.

The user should never need to return to an inbox list.

The experience should feel closer to making a series of small decisions than managing an email application.


### 11.7 Learn From Decisions

As the user makes decisions, Clearer begins to understand their preferences.

For example, if the user repeatedly moves certain types of emails into:

> **Shopping**

Clearer may eventually recognise the pattern and provide a recommendation.

The user remains responsible for every decision.

Learning should happen quietly in the background rather than interrupting the experience.


### 11.8 Organise Emails

When the user chooses Organise, Clearer presents their available groups.

The user can:

- Select an existing group.
- Create a new group.
- Cancel and return to the email.

If a new group is created, it should immediately become available for future decisions.

The corresponding provider label or organisational mechanism should also be created or updated.


### 11.9 Undo a Decision

If the user makes a mistake, they can select Undo.

The previous action is reversed where possible.

The email returns to the review flow.

The user should feel comfortable experimenting because mistakes do not feel permanent.

The experience should reinforce:

> **You are always in control.**


### 11.10 Complete the Unread Inbox

Eventually, the user reaches the end of their prioritised unread emails.

Clearer should recognise this as a meaningful milestone.

For example:

> **Your unread inbox is clear.**

> Nice work.

The user can then choose:

**Finish**

or:

**Continue with read emails**

The user should never be automatically pushed into another queue.


### 11.11 Continue With Read Emails

If the user chooses to continue, Clearer begins presenting read emails.

The experience remains identical.

The user can:

- Keep.
- Archive.
- Delete.
- Organise.

The user can stop at any point.

There is no requirement to process the entire inbox in one session.


### 11.12 Finish the Inbox Reset

When the user chooses to finish, Clearer presents a simple summary.

The summary may include:

- Emails reviewed.
- Emails archived.
- Emails deleted.
- Emails organised.
- Remaining unread emails.

The summary should focus on progress rather than volume.

For example:

> **Your inbox is a little clearer.**

> 42 emails reviewed.

> 18 archived  
> 7 deleted  
> 12 organised

The user should be able to leave immediately.

The session is complete.


### 11.13 Return to Clearer

When the user returns to Clearer in the future, the product should recognise that they have used it before.

The experience should not restart onboarding.

Instead, Clearer should provide a simple starting point for the next session.

For example:

> **Ready for another five minutes?**

> You've got 23 unread emails to review.

The product should remember the user's preferences, groups and previous decisions.

The experience should become more useful over time without becoming more complicated.


### 11.14 The Long-Term Experience

The first Inbox Reset is only the beginning.

Over time, Clearer should move from helping users clean up an overwhelming inbox to helping them maintain a clearer digital life.

The experience should evolve from:

> **"I need to clean my inbox."**

to:

> **"I'll spend five minutes keeping things clear."**

Eventually, the product should understand the user's preferences well enough to make increasingly useful recommendations while preserving the same fundamental interaction:

**Discover → Review → Decide → Progress → Finish**

The content may change.

The experience remains Clearer.

---

## 12. Screens & Interactions

The MVP should provide a focused set of screens that guide the user from connecting their email account through completing an Inbox Reset.

Each screen should have a clear purpose and a clear next action.

The product should avoid unnecessary screens, configuration and navigation.

The core experience should remain centred around the Inbox Reset.


### 12.1 Welcome

**Purpose**

Introduce Clearer and communicate the core value proposition before asking the user to connect their email.

**Content**

The screen should communicate:

- What Clearer is.
- The core value proposition.
- The five-minute session concept.
- That the user remains in control.

**Primary action**

> Get Started

**Supporting message**

> Five minutes. A clearer digital life.

The user should be able to understand the basic purpose of Clearer without reading lengthy explanations.


### 12.2 Onboarding

**Purpose**

Explain the Clearer experience and establish trust before requesting email access.

**Content**

The onboarding should briefly explain:

- Clearer reviews emails one at a time.
- Users make the decisions.
- AI provides recommendations rather than making decisions.
- Actions can be undone where possible.
- Clearer requires access to the user's inbox to provide the experience.

**Primary action**

> Connect Gmail

The onboarding should be concise and should not feel like a tutorial that must be completed before using the product.


### 12.3 Connect Gmail

**Purpose**

Allow the user to securely connect their Gmail account.

**Content**

The screen should clearly explain:

- Why Clearer needs access.
- What information it will access.
- What actions it may perform.
- That the user remains in control.
- Where the user can learn more about privacy and security.

**Primary action**

> Connect Gmail

The user should then complete Google's authentication and authorisation flow.

Clearer must not request or store the user's Gmail password.


### 12.4 Connection Success

**Purpose**

Confirm that the user's Gmail account has been successfully connected and transition them into their first Inbox Reset.

**Content**

The screen should communicate:

- That the account is connected.
- The email address that was connected.
- What happens next.

For example:

> **You're connected.**

> Let's make your inbox a little clearer.

**Primary action**

> Start Inbox Reset


### 12.5 Inbox Preparation

**Purpose**

Prepare the user's inbox for their first review session without requiring configuration.

Clearer should retrieve and analyse the information required to begin the review.

The screen may communicate:

- Number of unread inbox emails.
- Number of inbox emails.
- That Clearer is identifying useful patterns.
- That unread emails will be prioritised.

For example:

> **You have 327 unread emails.**

> We'll start with those.

The preparation experience should be brief and should transition automatically into the Inbox Reset when ready.

If preparation takes longer than expected, Clearer should communicate what is happening rather than displaying an unexplained loading state.


### 12.6 Inbox Reset

**Purpose**

Provide the primary Clearer experience.

This is the most important screen in the MVP.

The screen presents exactly one email at a time.

**Required information**

The user should be able to understand the email from the review screen.

At minimum, this should include:

- Sender.
- Subject.
- Date/time.
- Relevant email content or preview.

**Primary interactions**

The four directional gestures represent:

- **Swipe left — Delete**
- **Swipe right — Keep**
- **Swipe down — Archive**
- **Swipe up — Organise**

The same actions should also be available through visible controls.

**Supporting interactions**

The screen should provide:

- Undo.
- Progress information.
- Access to relevant group options when organising.
- A way to end the session.

The interface should clearly communicate the meaning of each action without requiring users to remember gestures.


### 12.7 Organise

**Purpose**

Allow the user to assign the current email to a group.

The Organise interaction may appear as an overlay, sheet, modal or equivalent interaction.

**Content**

The user should see:

- Existing groups.
- An option to create a new group.
- An option to cancel.

**Actions**

The user can:

- Select an existing group.
- Create a new group.
- Cancel.

Once a group is selected, the email should be assigned to that group and removed from the current review queue.

The selected group should correspond to the appropriate native organisational mechanism within the user's email provider.


### 12.8 Create Group

**Purpose**

Allow the user to create a new group while reviewing an email.

**Content**

The user should be asked for:

- Group name.

**Actions**

- Create.
- Cancel.

After creation:

1. The new group is created.
2. The current email is assigned to the new group.
3. The new group becomes available for future emails.

Group creation should feel lightweight and should not interrupt the review flow unnecessarily.


### 12.9 Action Feedback

**Purpose**

Confirm that an action has been successfully applied.

After an email is processed, Clearer should provide lightweight feedback.

Examples:

> Archived.

> Moved to Shopping.

> Deleted.

The feedback should also provide access to Undo.

Feedback should be brief and should not interrupt the transition to the next email.


### 12.10 Undo

**Purpose**

Allow users to safely reverse their most recent decision.

Undo should be easily accessible immediately after an action.

When selected:

1. The previous action is reversed.
2. The email returns to the review flow.
3. The user can make a different decision.

The interface should clearly communicate that the action has been reversed.

For example:

> **Undone.**

The user should never feel that an accidental swipe has permanently damaged their inbox.


### 12.11 Unread Inbox Complete

**Purpose**

Recognise the completion of the user's prioritised unread emails.

This is an important milestone within the Inbox Reset.

**Content**

The screen should communicate the achievement clearly.

For example:

> **Your unread inbox is clear.**

It may also provide a simple summary of progress.

**Actions**

The user can choose:

- **Finish**
- **Continue with read emails**

The user should not automatically enter the read-email queue.


### 12.12 Read Email Review

**Purpose**

Allow the user to continue their Inbox Reset after completing their unread emails.

The experience should use the same review interface as unread emails.

The user should be able to:

- Keep.
- Archive.
- Delete.
- Organise.
- Undo.
- Finish the session.

The transition from unread to read emails should be clearly communicated.

For example:

> **Your unread inbox is clear.**

> There are still read emails you can review.


### 12.13 Session Summary

**Purpose**

Give the user a clear sense of what they accomplished during the Inbox Reset.

The summary may include:

- Emails reviewed.
- Emails archived.
- Emails deleted.
- Emails organised.
- Remaining unread emails.

The summary should emphasise progress and clarity rather than encouraging additional usage.

For example:

> **Your inbox is a little clearer.**

> 42 emails reviewed.

The user should be able to leave immediately.

**Primary action**

> Done


### 12.14 Home / Next Session

**Purpose**

Provide a simple starting point for returning users.

The home experience should communicate the current state of the user's inbox and offer a clear next action.

For example:

> **Ready for another five minutes?**

> 23 unread emails to review.

**Primary action**

> Start Inbox Reset

The home screen should not become a dashboard filled with statistics.

Its purpose is to help the user decide whether they want to begin another focused session.


### 12.15 Settings & Account

**Purpose**

Give users control over their Clearer account and connected email account.

Users should be able to:

- See their connected email account.
- Manage their groups.
- View privacy information.
- Disconnect their email account.
- Manage relevant preferences.
- Request account deletion.

Settings should remain simple.

The MVP should not introduce extensive configuration options unless they are necessary for the core experience.


### 12.16 Loading States

Every asynchronous operation should have a meaningful loading state.

Loading states should communicate what Clearer is doing where useful.

For example:

> **Finding emails worth your attention...**

rather than:

> Loading...

Loading states should not imply that Clearer is making decisions on the user's behalf.

Where possible, the interface should remain responsive while data is being prepared.


### 12.17 Error States

Every major screen should have an appropriate error state.

Errors should:

- Explain what happened.
- Explain whether the user's email was changed.
- Tell the user what they can do next.
- Provide a retry option where appropriate.

For example:

> **We couldn't archive this email.**

> Nothing has changed.

> Try again.

Technical error codes should not be exposed unless they provide useful information to the user.


### 12.18 Empty States

Empty states should communicate completion rather than failure.

Examples include:

> **Your unread inbox is clear.**

or:

> **Nothing else needs your attention right now.**

Empty states should not encourage unnecessary additional activity.

They should provide a clear sense of completion and allow the user to leave.


### 12.19 Navigation

Navigation should remain intentionally minimal in the MVP.

The primary purpose of Clearer is the Inbox Reset, so the interface should avoid introducing a complex application navigation system.

Users should be able to access essential areas such as:

- Inbox Reset.
- Groups.
- Settings.
- Privacy information.

The review experience should remain focused and should not be interrupted by unnecessary navigation.


### 12.20 Responsive Experience

The MVP should provide a consistent experience across supported screen sizes.

The core review interaction must remain usable on:

- Tablet.
- Mobile.

The swipe interaction should be optimised for touch devices while visible action controls ensure that the experience remains fully usable.

---

## 13. Non-Functional Requirements

The MVP must not only provide the required functionality, but deliver it in a way that is secure, reliable, accessible and consistent with Clearer's product principles.

These requirements define the quality expectations for the MVP.


### 13.1 Platform

Clearer is a mobile application.

The MVP should be designed and optimised primarily for:

- iOS.
- Android.

Tablet support may be introduced where practical, but is not a core MVP requirement.

Clearer will not provide a browser-based web application as part of the MVP.

The product experience should be designed around mobile usage, particularly short, focused sessions of approximately five minutes.


### 13.2 Performance

Clearer should feel fast and responsive.

The primary Inbox Reset interaction should not feel delayed by unnecessary processing.

The product should:

- Launch quickly.
- Present the first email promptly once the inbox is ready.
- Present the next email promptly after a decision.
- Provide immediate visual feedback when an action is taken.
- Avoid unnecessary loading screens.
- Perform expensive processing asynchronously where appropriate.

Where an operation cannot complete immediately, Clearer should provide a clear loading state rather than leaving the user uncertain about what is happening.

Performance should be measured from the user's perspective, not simply from backend response times.


### 13.3 Mobile Experience

The core Clearer experience must be designed specifically for mobile devices.

The product should:

- Feel natural when used with one hand where practical.
- Support comfortable touch targets.
- Make swipe interactions responsive and predictable.
- Adapt to different screen sizes and aspect ratios.
- Respect device safe areas and system UI.
- Handle portrait and landscape orientations appropriately where supported.

The Inbox Reset should remain focused and usable without requiring users to navigate through complex menus.

Tablet layouts may provide additional screen space where appropriate, but should preserve the same core interaction model.


### 13.4 Touch & Gesture Interaction

Swiping is a core part of the Clearer experience.

Swipe interactions must:

- Respond immediately to user input.
- Clearly communicate the action being performed.
- Provide appropriate visual feedback.
- Avoid accidental actions where reasonably possible.
- Support cancellation before an action is committed.

The product must not rely exclusively on gestures.

Every core swipe action must have an accessible alternative through visible controls.

This ensures that users who cannot or do not want to use swipe gestures can still complete an Inbox Reset.


### 13.5 Accessibility

Accessibility is a product requirement, not a later enhancement.

The MVP should aim to meet **WCAG 2.2 AA** accessibility standards where reasonably applicable, alongside relevant platform accessibility guidelines for iOS and Android.

The product should support:

- Screen readers.
- Dynamic text sizing.
- Sufficient colour contrast.
- Clear focus and selection states where applicable.
- Accessible labels for interactive controls.
- Reduced motion preferences.
- Adequate touch target sizes.
- Non-gesture alternatives to swipe interactions.
- Clear and understandable language.

No essential functionality should depend solely on:

- Colour.
- Animation.
- Sound.
- Gesture.

The core Inbox Reset should remain usable with device accessibility features enabled.


### 13.6 Reliability

Clearer must behave predictably when communicating with external services.

If Gmail is temporarily unavailable, Clearer should:

- Clearly communicate the problem.
- Avoid presenting an action as successful when it was not.
- Avoid losing the user's progress.
- Allow the user to retry where appropriate.

Actions should only be treated as complete when Clearer has sufficient confirmation that the provider accepted the requested change.

The user should never be left uncertain about whether an email was:

- Deleted.
- Archived.
- Organised.
- Marked as read.


### 13.7 Data Integrity

Clearer must preserve the integrity of the user's email.

User actions should be applied accurately and consistently.

Clearer must not:

- Modify email content unexpectedly.
- Apply an action to the wrong email.
- Duplicate organisational labels unnecessarily.
- Lose user-created groups.
- Present stale information as current when that could lead to an incorrect decision.

Where the state of an email has changed outside Clearer, the product should handle the change gracefully.


### 13.8 Security

Security must follow the principle of least privilege.

Clearer should:

- Request only necessary permissions.
- Protect authentication tokens and secrets.
- Encrypt sensitive information in transit and at rest where applicable.
- Prevent unauthorised access to user data.
- Avoid exposing email content in application logs.
- Maintain appropriate security monitoring and audit capabilities.

Security requirements apply to the entire system, including:

- Mobile application.
- Backend services.
- APIs.
- Databases.
- AI services.
- Third-party integrations.
- Infrastructure.

Detailed security architecture will be defined separately in the Technical Architecture and Trust & Privacy documentation.


### 13.9 Privacy

Clearer must minimise the collection, processing and retention of personal information.

The product should:

- Process only information necessary for its functionality.
- Avoid unnecessary storage of email content.
- Avoid using personal email data for unrelated purposes.
- Never sell personal email data.
- Never use personal email data for AI model training without explicit user permission.
- Provide users with clear information about how their data is handled.

Privacy should be considered at the design stage of every new feature.


### 13.10 Authentication & Session Security

User authentication must use secure, provider-supported authentication mechanisms.

Clearer must not store users' Gmail passwords.

Authentication credentials, tokens and secrets must be protected against unauthorised access.

User sessions should:

- Expire appropriately.
- Be protected against common session attacks.
- Provide secure logout behaviour.
- Respect account disconnection and revoked provider permissions.

Clearer should use secure platform mechanisms for storing sensitive authentication information on the user's device.


### 13.11 Error Recovery

Clearer should recover gracefully from expected failures.

Potential failures include:

- Network interruption.
- Gmail API errors.
- Authentication expiry.
- AI service failures.
- Backend failures.
- Database failures.
- Application interruption.
- Device interruption.

When a failure occurs, Clearer should preserve as much user progress as possible.

The user should be able to understand:

1. What happened.
2. Whether their previous action succeeded.
3. What they can do next.

The application should never silently discard a user's progress.


### 13.12 Offline & Network Conditions

The MVP does not need to provide a fully offline Inbox Reset experience.

However, Clearer should handle temporary network interruptions gracefully.

If the device loses connectivity:

- Clearer should communicate that connectivity has been lost.
- Actions that have not been confirmed by the provider should not be presented as successful.
- The user should not accidentally perform duplicate actions after reconnecting.
- The application should resume gracefully when connectivity returns.

The product should distinguish between:

> **Action completed**

and:

> **Action requested but not yet confirmed.**


### 13.13 Observability

Clearer should provide sufficient monitoring to identify and diagnose problems.

The system should be able to detect:

- Authentication failures.
- Provider API failures.
- Failed user actions.
- Significant performance degradation.
- AI processing failures.
- Unexpected application errors.
- Security-relevant events.

Observability must not compromise user privacy.

Email content and other sensitive personal information should not be unnecessarily included in logs.


### 13.14 Scalability

The MVP does not need to be designed for millions of users.

However, the architecture should avoid decisions that create unnecessary barriers to future growth.

The system should be capable of scaling independently where appropriate across:

- User requests.
- Email processing.
- AI classification.
- Background jobs.
- Data storage.

Specific scalability targets and architecture decisions will be defined separately.


### 13.15 Mobile Platform Support

The MVP should support currently maintained versions of the target mobile platforms.

The exact minimum supported versions of:

- iOS.
- Android.

will be defined before development begins.

Clearer should follow the accessibility, security and interaction conventions of each supported platform while maintaining a consistent Clearer experience.

Platform-specific implementation details will be defined in the Technical Architecture.


### 13.16 Privacy-Safe Analytics

Clearer should collect enough product analytics to understand whether the MVP is working without unnecessarily tracking users.

Analytics should focus on product behaviour and outcomes rather than surveillance.

Useful events may include:

- Onboarding started.
- Gmail connected.
- Inbox Reset started.
- Email reviewed.
- Action selected.
- Undo used.
- Group created.
- Inbox Reset completed.
- User returned for another session.

Analytics should avoid collecting:

- Email content.
- Subject lines.
- Sender information.
- Email addresses.
- Personal message content.
- Other unnecessary personal information.

The purpose of analytics is to understand how the product is performing, not to build a profile of the user's private digital life.


### 13.17 Maintainability

The MVP should be built in a way that allows the product to evolve without unnecessary rewrites.

The implementation should:

- Follow established engineering standards.
- Use clear boundaries between product concerns.
- Avoid unnecessary complexity.
- Be covered by appropriate automated tests.
- Make important behaviour easy to understand.
- Document non-obvious decisions.

The architecture should allow Clearer to expand beyond email in the future without requiring the core product to be rebuilt from scratch.

Technical implementation details will be defined in the Technical Architecture.


### 13.18 Consistency

The product should behave consistently across supported mobile platforms.

Equivalent actions should:

- Behave predictably.
- Use consistent terminology.
- Produce consistent outcomes.
- Follow the same underlying product principles.

Platform-specific differences are acceptable where they improve usability or follow established platform conventions.

The core Clearer experience should remain recognisable regardless of device.


### 13.19 Trustworthiness

Clearer should always prefer transparency over convenience.

If the system is uncertain, it should communicate uncertainty.

If an action fails, it should say so.

If data is being processed, users should be able to understand why.

If Clearer cannot safely perform an action, it should not pretend that it has.

The product should never create a false sense of certainty.

> **When in doubt, be transparent.**

---

## 14. Success Metrics

Clearer's success is measured by whether it helps people feel more in control of their digital life.

We should not optimise for time spent in the app.

A successful Clearer session may be short, provided the user accomplishes something meaningful.

### 14.1 Primary Metrics

The MVP should initially focus on:

- **First Inbox Reset completion** — percentage of new users who connect Gmail and complete their first session.
- **Emails reviewed per session** — whether users are able to make meaningful progress.
- **Unread inbox progress** — how effectively users reduce their outstanding unread emails.
- **Repeat usage** — whether users choose to return for another Inbox Reset.
- **User-reported clarity** — whether users feel their inbox is easier to manage after using Clearer.

### 14.2 Supporting Metrics

We may also measure:

- Time from opening Clearer to first decision.
- Percentage of sessions reaching the unread inbox completion state.
- Undo rate.
- Group creation and usage.
- AI recommendation acceptance rate.
- Connection success and failure rates.
- Technical error rates.

These metrics should help us understand where the experience can be improved.

They should not become targets that encourage behaviour inconsistent with Clearer's principles.

### 14.3 Guardrail Metrics

Some metrics should be monitored specifically to ensure that optimisation does not undermine the product experience.

These include:

- Excessive session length.
- Excessive notification engagement.
- Unexpected deletion or archive behaviour.
- High rates of accidental actions or undo.
- User-reported privacy or trust concerns.
- AI recommendation errors.
- Account disconnections.

A metric should never be improved at the expense of user trust.

### 14.4 North Star

The ultimate measure of Clearer's success is simple:

> **Do people feel lighter after using it?**

Our ambition is not to maximise engagement.

It is to help people make meaningful progress in a small amount of time.

**Five minutes. A clearer digital life.**

---

## 15. Out of Scope

The following are explicitly outside the Clearer MVP.

This does not mean these ideas are rejected. It means they should not distract from proving the core Clearer experience.

### Platforms

- Browser-based web application.
- Outlook support.
- Additional email providers.

### Digital Clutter

- Photo cleaning.
- File and document cleaning.
- Cloud storage cleaning.
- Calendar management.
- Contact management.
- Other digital decluttering categories.

### Email Features

- Email composition or sending.
- Advanced filtering and rule builders.
- Shared or team inboxes.
- Enterprise email management.
- Replacing the user's existing email client.
- Complex mailbox management outside the Inbox.

### Automation

- Autonomous email deletion.
- Autonomous archiving.
- Autonomous organisation.
- Actions taken solely from AI recommendations.
- Fully automated inbox management.

### Engagement & Monetisation

- Gamification systems such as XP, coins or streaks.
- Social features.
- Advertising.
- Engagement mechanisms designed to increase time spent in the app.

### Guiding Principle

When a new feature is proposed during MVP development, the first question should be:

> **Does this help us prove the core Clearer experience?**

If the answer is no, it should remain out of scope.

**Focus creates better products.**

---

## 16. Future Vision

The MVP begins with email.

Email is the first problem Clearer solves because it is one of the most persistent and familiar forms of digital clutter.

But Clearer is not an email product.

It is a broader vision for a clearer digital life.

### 16.1 Beyond Email

Over time, Clearer may expand to other areas of digital clutter, including:

- Photos.
- Files and documents.
- Cloud storage.
- Notifications.
- Bookmarks.
- Other areas where digital accumulation creates unnecessary cognitive load.

Each new area should use the same fundamental Clearer experience:

**Discover → Review → Decide → Progress → Finish**

The content changes.

The experience remains Clearer.

### 16.2 Personal Digital Organisation

As Clearer learns how people make decisions, it should become increasingly useful across different areas of their digital life.

A preference learned while organising email may eventually help inform how other types of digital content are organised.

The goal is not to create a collection of disconnected cleaning tools.

The goal is to create one trusted layer for managing digital clutter.

### 16.3 The Digital Clarity Platform

The long-term vision is a **Digital Clarity Platform** that helps people maintain a healthier relationship with their digital environment.

Clearer should help people:

- Understand their digital clutter.
- Make small, confident decisions.
- Build sustainable habits.
- Keep control of their information.
- Spend less time managing digital noise.

The platform should never become another source of digital noise itself.

The principles established in the Constitution and Product Principles should continue to guide every future expansion.

### 16.4 The Vision

Clearer starts with one inbox.

The ambition is much larger:

> **Help people feel lighter by turning overwhelming digital clutter into small, confident decisions.**

**Five minutes. A clearer digital life.**

---

## 17. Open Questions

The PRD defines the intended product experience, but some decisions should remain open until design, technical investigation or user testing provides enough information to make them confidently.

Open questions should be resolved before they become blockers for implementation.

### 17.1 Product & UX

- What is the ideal amount of email content to display on the Inbox Reset screen?
- Should the user be able to expand an email to view its full content?
- How should the review experience behave when new emails arrive during an active session?
- How should Clearer handle emails that have already been modified or removed outside of Clearer?
- What is the most intuitive way to communicate the four swipe directions during the first session?
- Should users be able to manually skip an email without making a decision?

### 17.2 Groups

- How should Clearer handle existing Gmail labels when a user first connects their account?
- Should existing Gmail labels automatically become Clearer groups?
- How should group names that already exist in Gmail be handled?
- What should happen if a group is renamed or deleted in Gmail?
- Should users eventually be able to organise an email into a provider label without creating a Clearer group?

### 17.3 AI

- Which AI capabilities provide enough value to justify their complexity in the MVP?
- Which email information needs to be processed by AI?
- Which information can be classified deterministically without AI?
- Which AI provider or model is appropriate?
- How should AI confidence thresholds affect recommendations?
- How should user corrections influence future recommendations?
- How should we evaluate recommendation quality before launch?

### 17.4 Authentication & Data

- What exact Gmail OAuth scopes are required?
- What information needs to be stored by Clearer between sessions?
- How much email metadata should be cached?
- How long should cached information be retained?
- What should happen to Clearer-specific data when a user disconnects Gmail?
- What should happen when Gmail access is revoked externally?

### 17.5 Platform

- Which minimum iOS version will the MVP support?
- Which minimum Android version will the MVP support?
- Should tablet support be included in the initial release?
- Should the first release launch on iOS and Android simultaneously?

### 17.6 Notifications

- Should Clearer send notifications at all in the MVP?
- If notifications are introduced, what events genuinely justify interrupting the user?
- How should users control notification frequency?

### 17.7 Validation

- How many users should participate in the initial MVP testing?
- What behaviours would indicate that the Inbox Reset experience is genuinely useful?
- What level of AI recommendation accuracy is acceptable for launch?
- What trust or privacy concerns emerge during user testing?
- What evidence would justify expanding beyond email?

### 17.8 Decision Process

Open questions should be resolved through the appropriate process:

- **User experience questions** → Design and user testing.
- **Product questions** → Product decisions.
- **Technical questions** → Technical Architecture and engineering investigation.
- **Security and privacy questions** → Security and privacy review.

Not every open question needs to be resolved before development begins.

The goal is not to eliminate uncertainty.

The goal is to make uncertainty visible so that important decisions are made deliberately.