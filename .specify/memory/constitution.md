<!--
Sync Impact Report

Version change: TEMPLATE → 1.0.0

Modified principles:
- PRINCIPLE_1_NAME (template placeholder) → I. Code Quality & Maintainability
- PRINCIPLE_2_NAME (template placeholder) → II. Test-First & Coverage
- PRINCIPLE_3_NAME (template placeholder) → III. User Experience Consistency
- PRINCIPLE_4_NAME (template placeholder) → IV. Performance & Resource Constraints
- PRINCIPLE_5_NAME (template placeholder) → V. Observability & Release Discipline

Added sections:
- Governance: explicit amendment procedure and versioning policy

Removed sections: none (template placeholders replaced)

Templates requiring updates:
- .specify/templates/plan-template.md ✅ updated
- .specify/templates/spec-template.md ✅ updated
- .specify/templates/tasks-template.md ✅ updated
- .specify/templates/commands/*.md ⚠ pending (no command templates found to update)

Follow-up TODOs:
- RATIFICATION_DATE: TODO(RATIFICATION_DATE): original adoption date unknown; set before final ratification
-->

# flappy-birds Constitution

## Core Principles

### I. Code Quality & Maintainability (NON-NEGOTIABLE)

All production code MUST be readable, well-documented, and maintainable. This project enforces:

- All code changes MUST pass configured linters and formatters before merge.
- Public APIs and modules MUST include concise README-level documentation and examples.
- Code MUST be modular with single-responsibility components; large methods/functions MUST be split.
- Changes that increase complexity MUST include a short justification in the PR description.

Rationale: High maintainability reduces long-term cost and onboarding time. These rules
are testable (lint pass, presence of docs, review checklist) and enforceable via CI.

### II. Test-First & Coverage

Testing is mandatory. For every new feature or bug fix:

- A failing automated test MUST be added that reproduces the bug or specifies the feature
	(TDD flow preferred: write tests → see them fail → implement → make them pass).
- Unit tests MUST cover core logic; integration tests MUST cover cross-module behavior.
- Feature-level acceptance tests or spec-linked scenarios MUST be present for P1 user journeys.
- The repository SHOULD aim for a minimum of 80% coverage for new/changed code; exceptions
	MUST be documented in the PR and justified.

Rationale: Tests catch regressions early and document intended behavior. Requiring tests
before implementation makes behavior explicit and measurable.

### III. User Experience Consistency

The product experience MUST be coherent across flows and platforms:

- Shared design tokens/components MUST be used for consistent visuals and interactions.
- Accessibility basics (semantic markup, keyboard navigation, color contrast) MUST be met
	for all user-facing screens or clearly documented exceptions provided.
- UX changes that affect flows MUST include a short user-journey summary and acceptance
	criteria in the spec and PR.

Rationale: Consistent UX reduces user friction and support costs. Testable artifacts
include screenshots, user-journey acceptance tests, and a component usage checklist.

### IV. Performance & Resource Constraints

Performance targets MUST be explicit for features that affect latency, throughput, or
client-side responsiveness:

- Every feature with perf requirements MUST include measurable goals (e.g., p95 latency,
	memory budget, frame-rate targets) in its spec.
- Benchmarks or lightweight synthetic tests MUST accompany changes that could affect
	performance; regressions MUST be prevented by CI where feasible.
- Resource budgets (e.g., max memory, bundle size) SHOULD be declared for platform-specific
	components and enforced via tooling when possible.

Rationale: Explicit, measurable performance requirements avoid regressions and guide
engineering trade-offs. Tests and benchmarks provide objective validation.

### V. Observability & Release Discipline

Releases and runtime behavior MUST be observable and manageable:

- Services or apps MUST emit structured logs and expose basic metrics (errors, latency,
	success rates) where applicable.
- Releases MUST include a rollout plan (canary/gradual) for impactful changes and a
	rollback procedure documented in the PR when applicable.
- Post-release checks (smoke tests, quick metrics review) MUST be run and recorded.

Rationale: Observability shortens MTTR and ensures that releases are safe to operate.
This principle ties quality, testing, and performance into operational reality.

## Additional Constraints

### Security & Dependencies

- Dependencies MUST be tracked and updated regularly; known critical vulnerabilities MUST
	be remediated or mitigated before production deployment.
- Secrets MUST NOT be committed; use approved secret storage mechanisms for credentials.

### Supported Platforms

- This repository targets the platforms declared in each feature plan. Any deviation MUST be
	documented and approved in the spec.

## Development Workflow & Quality Gates

- All PRs MUST include a short description, linked spec/plan (when applicable), and a
	checklist verifying constitution gates: lint, tests, documentation, and perf/UX notes.
- The default CI pipeline MUST run linting, unit tests, and a selected set of integration
	or smoke tests. A green CI is required before merging.
- Complexity or scope increases MUST be discussed on the issue/spec and summarized in the PR.

## Governance

Amendments and versioning follow this procedure:

1. Any contributor MAY propose an amendment by opening a PR against `.specify/memory/constitution.md`.
2. Proposed amendments MUST include: rationale, migration/compatibility notes, and impact
	 analysis (which templates, CI, and plans change).
3. For non-breaking clarifications or additions, a MINOR version bump is expected. For
	 wording/typo fixes, a PATCH bump is expected. For removals or redefinitions that are
	 backward-incompatible, a MAJOR bump is required.
4. Amendments reach ratification after at least one approving review from a maintainer
	 and a passing CI that validates no blocking template regressions. The PR merge date
	 becomes the new Last Amended date.

Compliance expectations:

- Feature plans and specs MUST include a short "Constitution Checklist" demonstrating
	how the feature meets applicable principles before Phase 0 → Phase 1 transitions.
- Project maintainers MUST run periodic reviews (quarterly suggested) to ensure ongoing
	alignment; findings should be recorded and linked to this constitution.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE) | **Last Amended**: 2025-10-29

