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