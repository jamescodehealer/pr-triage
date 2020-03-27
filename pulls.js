{
  '26434': {
    description: 'code fix for functions lacking return expressions',
    reviewer: 'andrew-casey',
      state: "waiting",
      label: "backlog",
      flags: "feature"
    notes: []
  },
  '27227': {
    description: 'improve error message for `==` of two different types',
    reviewer: 'eli',
      state: "review",
      label:"backlog",
      flags: "fix",
    notes: [
      '  - This is so old that it may be obsolete. First thing is to check what errors we currently give.'
    ]
  },
    '27591': {
        description: "stricter assignability from an index signature to optional properties"
        notes: [
            "  - Pretty breaky and doesn't find [m]any good bugs."
            ]
        state: "waiting",
        label: "backlog",
        flags: "feature",
        reviewer: "nathan"
    }
  '28023': {
    description: 'reword error message when comparing non-comparable types',
    reviewer: 'ryan',
      state: "waiting",
      label:"backlog",
      flags: "feature",
    notes: [ '  - Just changes the message text; no other changes.' ]

  },
  '28250': {
    description: 'convert function to arrow expr and back.',
    reviewer: 'mine',
      status: "review",
      label: "backlog",
      flags: "feature",
    notes: [
      "  - Written by a couple of students for their bachelor's thesis.",
      '  - Justification for the issue is "Jetbrains has it".',
      '  - Andy already reviewed it, so the code should be basically OK.',
      '  - The main task is to decide whether "Jetbrains has it" is good enough reason for us to have it.'
    ]
  },
  '28708': {
    description: 'fix block-scoped capturing by class expressions inside iteration',
    reviewer: 'ron',
      status: "review",
      label: "milestone",
      flags: "fix",
    notes: []
  },
  '29228': {
    description: 'give more mapped type properties a syntheticOrigin link',
    reviewer: 'anders',
      status: "review",
      label: "backlog",
      flag: "feature",
    notes: [
      "  - The idea is that it works for properties of non-homomorphic mapped types, but this doesn't make sense."
    ]
  },
  '29374': {
    description: 'allow non-this, non-super before super in constructors',
    reviewer: 'ron',
      status: "review",
      label: "backlog",
      flag: "feature",
    notes: []
  },
  '29468': {
    description: 'instantiate `this` in non-super access expressions',
    reviewer: 'anders',
      status:"review",
      label: "milestone",
      flag: "fix",
    notes: []
  },
    '29539': {
        description: "",
        reviewer: 'nathan',
        status:'review',
        label: 'uncommitted',
        flag: 'feature',
        notes: []
    }
  '30161': {
    description: 'instanceof narrowing of generics: copy type parameter from original',
    reviewer: 'anders',
      status: "review",
      label: 'backlog',
      flag: 'feature',
    notes: [
      "  - The idea is that it works for properties of non-homomorphic mapped types, but this doesn't make sense."
    ]
  },
  '30593': {
    description: 'narrow non-declared unions by discriminant',
    reviewer: 'anders',
      status: "review",
      label: 'backlog',
      flag: 'fix',
    notes: []
  },
  '30639': {
    description: 'another type relation for conditional types',
      status: "waiting",
      label: 'milestone',
      flag: 'feature',
    reviewer: 'wesley',
    notes: []
  },
  '31023': {
    description: 'Allow identical type parameter lists to merge in union signatures',
    reviewer: 'anders',
      state: 'review',
      label: 'milestone',
      flag: 'fix',
    notes: []
  },
    '31029': {
        description: "fix relations for instantations of same generic signature",
        reviewer: 'anders',
        state: 'waiting',
        label: "milestone",
        flag: 'fix',
        notes: ['  - waiting to decide whether this should be under strictFunctionTypes or other strict flag.']
    },
  '31277': {
    description: "don't measure variance for conditional type extendsType",
    reviewer: 'wesley',
      state: 'waiting',
      label: 'milestone',
      flag: 'feature',
    notes: [
      "  - This is Jack William's PR, and is kind of blocked by 30639."
    ]
  },
  '31345': {
    description: 'inference: break down target unions before source unions',
    reviewer: 'anders',
      state: 'review',
      label: 'backlog',
      flag: 'fix',
    notes: []
  },
  '31455': {
    description: 'fix type parameter leak in conditional types',
    reviewer: 'anders',
      state: 'review',
      label: 'milestone',
      flag: 'fix',
    notes: []
  },
  '31633': {
    description: 'allow inference to explore multiple instances of the same symbol',
    reviewer: 'anders',
      state: 'review',
      label: 'milestone',
      flag: 'fix',
    notes: [
      "  - Re-adds recursion depth to inference -- but in a way that's more like assignability?"
    ]
  },
  '32131': {
    description: 'improved Array.flat declaration in es2019.array.d.ts',
    reviewer: 'ryan',
      state: 'waiting',
      label: 'milestone',
      flag: 'feature',
    notes: []
  },
  '32702': {
    description: 'improve error message for JSX component w/bad return type',
    reviewer: 'wesley',
      state: "review",
      label: 'backlog',
      flag: 'feature',
    notes: []
  },
  '33055': {
    description: 'better typings for Promise.all',
    reviewer: 'ron',
      state: 'review',
      label: 'backlog',
      flag: 'feature',
    notes: []
  },
  '33069': {
    description: 'improve error checking with multiple spread arguments',
    reviewer: 'eli',
    notes: [
      '  - This is a fix for the bug I asked you to look at recently.'
    ]
  },
  '33071': {
    description: 'narrow unit-unit inequality tests using comparability',
    reviewer: 'wesley',
    notes: [
      "  - Is Jack Williams' assessment of the problem in the bug correct?"
    ]
  },
  '33074': {
    description: 'better typings for Promise.resolve',
    reviewer: 'ron',
      state: 'review',
      label: 'backlog',
      flag: 'feature',
    notes: []
  },
  '33089': {
    description: 'only apply indexed access write simplifications to types that arise from mutations',
    reviewer: 'wesley',
      state: 'review',
      label: 'backlog',
      flag: 'fix',
    notes: []
  },
  '33103': {
    description: 'better typings for Promise.then',
    reviewer: 'ron',
      state: 'review',
      label: 'backlog',
      flag: 'feature',
    notes: []
  },
  '33139': {
    description: 'higher order inference: `this` parameters similar to functions and constructors',
    reviewer: 'anders',
      state: 'review',
      label: 'backlog',
      flag: 'feature',
    notes: []
  },
  '33320': {
    description: 'unused type parameter in JSDoc gives the correct error',
    reviewer: 'andrew-branch',
      state: 'review',
      label: 'backlog',
      flag: 'fix',
    notes: [
      '  - This change looks suspiciously simple. It should at least use getEffectiveTypeParameters, right?'
    ]
  },
  '33363': {
    description: 'cache repeated prototype sets in a variable',
    reviewer: 'ron',
      state: 'review',
      label: 'backlog',
      flag: 'feature',
    notes: []
  },
    // TODO: Looked like a lot more 333* PRs that I skipped
  '33434': {
    description: 'unify if/switch logic in typeof narrowing',
    reviewer: 'wesley',
      state: 'review',
      label: 'backlog',
      flag: 'feature',
    notes: []
  },
  '33441': {
    description: 'improve class/function merge error',
    reviewer: 'orta',
      state: 'review',
      label: 'backlog',
      flag: 'feature',
    notes: []
  },
  '33544': {
    description: 'add `this` type for Reflect.defineProperty',
    reviewer: 'nathan',
      state: 'review',
      label: 'backlog',
      flag: 'feature',
    notes: []
  },
  '33570': {
    description: 'disallow assignment of {} to unconstrained type parameters',
    reviewer: 'wesley',
      state: 'waiting',
      label: 'milestone',
      flag: 'feature',
    notes: [
      '  - This is hanging out here until TS 4.0, but needs an error message added before then.'
    ]
  },
    '33645': {
    description: 'better typings for Array.concat() etc',
    reviewer: 'nathan',
      state: 'review',
      label: 'backlog',
      flag: 'feature',
    notes: [
      '  - This is hanging out here until TS 4.0, but needs an error message added before then.'
    ]
  },
  '33652': {
    description: 'goto implementation suggests all subtypes',
    reviewer: 'andrew-branch',
      state: 'review',
      label: 'backlog',
      flag: 'feature',
    notes: []
  },
  '33673': {
    description: 'emit fewer duplicate trivia on initialisers added by a transformer',
    reviewer: 'ron',
      state: 'review',
      label: 'backlog',
      flag: 'feature',
    notes: []
  },
  '33767': {
    description: 'Add an overload to Object.freeze that preserves literal types',
    reviewer: 'nathan',
      state: 'review',
      label: 'backlog',
      flag: 'feature',
    notes: []
  },
    '33707': {
    description: 'better typings for Promise',
    reviewer: 'ron',
      state: 'review',
      label: 'backlog',
      flag: 'feature',
    notes: [
      '  - The following 3 PRs are all included in this one, I think.'
    ]
  },
  '33863': {
    description: 'add shim for ES promise',
    reviewer: 'ron',
      state: 'waiting',
      label: 'milestone',
      flag: 'feature',
    notes: [
      "  - Sounds like this one is required by a feature that's currently on hold."
    ]
  },
  '33876': {
    description: 'make get[Non]OptionalType part of the public API',
    reviewer: 'orta',
      state: 'review',
      label: 'backlog',
      flag: 'feature',
    notes: [
      '  - Seems fine, we just need to decide whether it would be useful long-term.'
    ]
  },
  '34518': {
    description: 'cache global tagged template objects',
    reviewer: 'ron',
      state: 'review',
      label: 'backlog',
      flag: 'feature',
    notes: []
  },
  '34655': {
    description: 'add error when enum member references itself in its initialiser',
    reviewer: 'eli',
      state: 'review',
      label: 'backlog',
      flag: 'fix',
    notes: []
  },
  '34686': {
    description: 'add link to documentation in tsconfig generated by tsc --init',
    reviewer: 'sheetal',
      state: 'review',
      label: 'backlog',
      flag: 'fix',
    notes: [
      '  - This links to a closed bug, and does way more than asked for.',
      '  - The main task is probably talking to the contributor and convincing them to close or scale back the PR.'
    ]
  },
  '34713': {
    description: 'simplify extension handling wrt .d.ts and .js',
    reviewer: 'sheetal',
      state: 'waiting',
      label: 'milestone',
      flag: 'feature',
    notes: []
  },
  '34868': {
    description: 'sort union emit',
    reviewer: 'nathan',
      state: 'review',
      label: 'backlog',
      flag: 'feature',
    notes: []
  },
    '34941': {
    description: 'fix String.prototype.replace.call overload selection',
    reviewer: 'nathan',
      state: 'review',
      label: 'backlog',
      flag: 'fix',
    notes: ['  - bug filed by ljharb so :eyeroll:']
  },
    '34932': {
    description: 'fix Number.is* to accept unknown again',
    reviewer: 'orta',
      state: 'review',
      label: 'backlog',
      flag: 'fix',
    notes: []
  },
  '35148': {
    description: 'new compiler options to support deno/browser style import',
    reviewer: 'wesley',
      state: 'review',
      label: 'milestone',
      flag: 'feature',
    notes: [
      "  - I put both you and Ron on this PR, but it's really module-centric, so I think you're the right person for it."
    ]
  },
  '35155': {
    description: 'disallow exponentational operator on bigint for targets <ES2016',
    reviewer: 'eli',
      state: 'review',
      label: 'backlog',
      flag: 'feature',
    notes: []
  },
  '35219': {
    description: 'convert function to ES6 class understands `x.prototype = {}`',
      state: 'review',
      label: 'backlog',
      flag: 'feature',
    reviewer: 'andrew-branch',
    notes: []
  },
  '35284': {
    description: 'defer generic awaited types',
    reviewer: 'ron',
      state: 'review',
      label: 'backlog',
      flag: 'feature',
    notes: [
      '  - This initially sounds like an attempt to do `awaited`, except wrong.',
      '  - Probably the hard part will be closing this PR in a polite way.'
    ]
  },
  '35438': {
    description: 'make never rest type top-like',
    reviewer: 'wesley',
      state: 'review',
      label: 'bonus',
      flag: 'feature',
    notes: [
      '  - Jack marked this is speculative, but you seemed to like it, so we should decide whether to merge or close it.'
    ]
  },
  '35494': {
    description: 'capture thisArg of optional chaining when parenthesized',
    reviewer: 'ron',
      state: 'review',
      label: 'milestone',
      flag: 'fix',
    notes: []
  },
  '35741': {
    description: 'a type relation for conditional types',
    reviewer: 'wesley',
      state: 'review',
      label: 'milestone',
      flag: 'feature',
    notes: [ "  - I assume jablko's idea is similar to yours?" ]
  },
  '35863': {
    description: 'non-null assertion applied to control-flow type `never` now errors',
    reviewer: 'anders',
      state: 'review',
      label: 'backlog',
      flag: 'fix',
    notes: []
  },
  '35877': {
    description: 'fix receiver on calls of imported/exported functions',
    reviewer: 'ron',
      state: 'review',
      label: 'milestone',
      flag: 'fix',
    notes: []
  },
  '35937': {
    description: 'a refactor retains comments it was deleting by mistake.',
    reviewer: 'mine',
      state: 'review',
      label: 'backlog',
      flag: 'fix',
    notes: [
      '  - Comments are quite tricky to get right.',
      '  - Some good lines from the review:',
      '  ```ts',
      '  // Check if it is semi-colon',
      '  // I feel like there has to be a way using SyntaxKind.SemicolonToken',
      '  return lastChar === ";";',
      '  ```',
      '  - This is almost certainly wrong, because this is tricky to get right.',
      '  - The main task is to politely say "Your PR is wrong, and this is really hard."'
    ]
  },
  '36408': {
    description: "remove Reflect.decorate since it's non-standard",
    reviewer: 'ron',
    notes: []
  },
  '36543': {
    description: 'a refactor retains a modifier it was deleting by mistake.',
    reviewer: 'mine',
      state: 'review',
      label: 'backlog',
      flag: 'fix',
    notes: []
  },
  '36654': {
    description: 'did-you-mean error+codefix for non-Promise returning async functions',
    reviewer: 'eli',
      state: 'review',
      label: 'milestone',
      flag: 'feature',
    notes: []
  },
  '36723': {
    description: 'AsyncIterable[Iterator] adds type parameters for TReturn, TNext',
    reviewer: 'ron',
      state: 'review',
      label: 'milestone',
      flag: 'fix',
    notes: []
  },
  '36844': {
    description: 'add SourceFile and PrivateIdentifier constructors',
      state: 'review',
      label: 'backlog',
      flag: 'fix',
    reviewer: 'ron',
    notes: []
  },
  '37013': {
    description: '__extends should use Object.prototype.hasOwnProperty.call',
      state: 'review',
      label: 'milestone',
      flag: 'fix',
    reviewer: 'ron',
    notes: []
  },
  '37228': {
    description: 'fix crash during module resolution',
    reviewer: 'sheetal',
      state: 'waiting',
      label: 'milestone',
      flag: 'fix',
    notes: []
  }
}
