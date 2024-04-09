---
title: "Parallel Learning of Koopman Eigenfunctions and Invariant Subspaces for Accurate Long-Term Prediction"
collection: journal
permalink: /journal/2021-06-14-parallel-ssd
excerpt: "We present a parallel data-driven strategy to identify finite-dimensional functional spaces invariant under the Koopman operator associated to an unknown dynamical system. We build on the Symmetric Subspace Decomposition (SSD) algorithm, a centralized method that under mild conditions on data sampling provably finds the maximal Koopman-invariant subspace and all Koopman eigenfunctions in an arbitrary finite-dimensional functional space. A network of processors, each aware of a common dictionary of functions and equipped with a local set of data snapshots, repeatedly interact over a directed communication graph. Each processor receives its neighbors’ estimates of the invariant dictionary and refines its estimate by applying SSD with its local data on the intersection of the subspaces spanned by its own dictionary and the neighbors’ dictionaries. We identify conditions on the network topology to ensure the algorithm identifies the maximal Koopman-invariant subspace in the span of the original dictionary, characterize its time, computational, and communication complexity, and establish its robustness against communication failures."
date: 2021-06-14
venue: "IEEE Transactions on Control of Network Systems (Volume 8, Issue 4)"
paperurl: "https://doi.org/10.1109/TCNS.2021.3088791"
citation: "M. Haseli and J. Cortés, &quot;Parallel Learning of Koopman Eigenfunctions and Invariant Subspaces for Accurate Long-Term Prediction,&quot; in <i>IEEE Transactions on Control of Network Systems</i>, vol. 8, no. 4, pp. 1833-1845, Dec. 2021, doi: 10.1109/TCNS.2021.3088791."
---

<p style="text-align:center"> <a href="http://terrano.ucsd.edu/jorge/publications/jp/jp137.html">Abstract</a> | <a href="https://arxiv.org/abs/2005.06138">arXiv</a> | <a href="https://doi.org/10.1109/TCNS.2021.3088791">IEEEXplore</a> </p>

## Abstract

We present a parallel data-driven strategy to identify finite-dimensional functional spaces invariant under the Koopman operator associated to an unknown dynamical system. We build on the Symmetric Subspace Decomposition (SSD) algorithm, a centralized method that under mild conditions on data sampling provably finds the maximal Koopman-invariant subspace and all Koopman eigenfunctions in an arbitrary finite-dimensional functional space. A network of processors, each aware of a common dictionary of functions and equipped with a local set of data snapshots, repeatedly interact over a directed communication graph. Each processor receives its neighbors’ estimates of the invariant dictionary and refines its estimate by applying SSD with its local data on the intersection of the subspaces spanned by its own dictionary and the neighbors’ dictionaries. We identify conditions on the network topology to ensure the algorithm identifies the maximal Koopman-invariant subspace in the span of the original dictionary, characterize its time, computational, and communication complexity, and establish its robustness against communication failures.

