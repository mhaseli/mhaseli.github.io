---
title: "Fast Identification of Koopman-Invariant Subspaces: Parallel Symmetric Subspace Decomposition"
collection: conference
permalink: /conference/2020-07-27-parallel-ssd
excerpt: "This paper presents a parallel data-driven method to identify finite-dimensional subspaces that are invariant under the Koopman operator describing a dynamical system. Our approach builds on Symmetric Subspace Decomposition (SSD), which is a centralized scheme to find Koopman-invariant subspaces and Koopman eigenfunctions. Given a dictionary of functions, a collection of processors communicating through a strongly connected time-invariant directed graph, and a set of data snapshots gathered from the dynamical system, our approach distributes the data snapshots among the processors and initializes each processor with the original dictionary. Then, at each iteration, processors prune their dictionary by using the information received from their neighbors and applying the SSD method on the pruned dictionary with their local data. We prove that the algorithm terminates in a finite number of iterations and that the processors, upon termination, reach consensus on the maximal Koopman-invariant subspace in the span of the dictionary (and is therefore equivalent to SSD). A simulation example shows significant gains in time complexity by the proposed method over SSD."
date: 2020-07-27
venue: "2020 American Control Conference (ACC)"
paperurl: "https://doi.org/10.23919/ACC45564.2020.9147223"
citation: "M. Haseli and J. Cortés, &quot;Fast Identification of Koopman-Invariant Subspaces: Parallel Symmetric Subspace Decomposition,&quot; <i>2020 American Control Conference (ACC)</i>, Denver, CO, USA, 2020, pp. 4545-4550, doi: 10.23919/ACC45564.2020.9147223."
---



