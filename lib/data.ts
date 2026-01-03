
export const profile = {
    name: "Masih Haseli",
    title: "Postdoctoral Scholar",
    institution: "California Institute of Technology (Caltech)",
    department: "Computing and Mathematical Sciences Department",
    email: "mhaseli@caltech.edu",
    office: "Gates Thomas Laboratory (44)",
    scholar: "https://scholar.google.com/citations?hl=en&user=Am-rcgMAAAAJ",
    linkedin: "https://www.linkedin.com/in/masih-haseli/",
    image: "/images/profile_photo.png",
    bio: [
        "I am a postdoctoral scholar in Computing and Mathematical Sciences at Caltech, advised by Prof. Joel W. Burdick. Previously, I was a postdoctoral scholar in the Department of Mechanical and Aerospace Engineering at the University of California San Diego with Prof. Jorge Cortés. I received my Ph.D. in Engineering Sciences (Mechanical Engineering) from the University of California San Diego in 2022.",
        "My research develops theoretically principled, data-driven methods for modeling, analysis, and control of nonlinear dynamical systems, with applications in learning and robotics. I am particularly interested in Koopman operator theory and nonlinear control."
    ]
};

export type NewsItem = {
    date: string;
    content: string;
    url?: string;
    relatedPublication?: string;
};

export const news: NewsItem[] = [
    {
        date: "Dec 2025",
        content: "Our paper \"Temporal forward-backward consistency, not residual error, measures the prediction accuracy of extended dynamic mode decomposition\" won the 2025 IEEE Control Systems Letters Outstanding Paper Award.",
        relatedPublication: "JP3"
    },
    {
        date: "Dec 2025",
        content: "Our paper \"Koopman operators in robot learning\" was accepted to IEEE Transactions on Robotics.",
        relatedPublication: "JP7"
    },
    {
        date: "Nov 2025",
        content: "Our paper \"Modeling nonlinear control systems via Koopman control family: universal forms and subspace invariance proximity\" was accepted to Automatica.",
        relatedPublication: "JP5"
    }
];

export type Link = {
    name: string;
    url: string;
};

export type Publication = {
    id: string;
    title: string;
    authors: string;
    venue: string;
    year: string;
    pdf?: string; // We can link to the PDF if available (e.g. JP9.html -> PDF usually)
    award?: string;
    note?: string;
    type: "journal" | "conference" | "thesis";
    abstract?: string;
    bibtex?: string;
    links?: Link[];
};

export const publications: Publication[] = [
    // Journals
    {
        id: "JP9",
        type: "journal",
        title: "Two roads to Koopman operator theory for control: infinite input sequences and operator families",
        authors: "M. Haseli, I. Mezić, J. Cortés",
        venue: "IEEE Transactions on Automatic Control",
        year: "submitted",
        pdf: "/Material/JP/2025_HaMeCo-tac.pdf",
        abstract: "The Koopman operator, originally defined for dynamical systems without input, has inspired many applications in control. Yet, the theoretical foundations underpinning this progress in control remain underdeveloped. This paper investigates the theoretical structure and connections between two extensions of Koopman theory to control: (i) Koopman operator via infinite input sequences and (ii) the Koopman control family. Although these frameworks encode system information in fundamentally different ways, we show that under certain conditions on the function spaces they operate on, they are equivalent. The equivalence is both in terms of the actions of the Koopman-based formulations in each framework as well as the function values on the system trajectories. Our analysis provides constructive tools to translate between the frameworks, offering a unified perspective for Koopman methods in control.",
        links: [
            { name: "PDF", url: "/Material/JP/2025_HaMeCo-tac.pdf" },
            { name: "arXiv", url: "https://arxiv.org/abs/2510.15166" }
        ]
    },
    {
        id: "JP5",
        type: "journal",
        title: "Modeling nonlinear control systems via Koopman control family: universal forms and subspace invariance proximity",
        authors: "M. Haseli, J. Cortés",
        venue: "Automatica 185",
        year: "2026",
        note: "112722",
        pdf: "/Material/JP/2023_HaCo-auto.pdf",
        abstract: "This paper introduces the Koopman Control Family (KCF), a mathematical framework for modeling general (not necessarily control-affine) discrete-time nonlinear control systems with the aim of providing a solid theoretical foundation for the use of Koopman-based methods in systems with inputs. We demonstrate that the concept of KCF captures the behavior of nonlinear control systems on a (potentially infinite-dimensional) function space. By employing a generalized notion of subspace invariance under the KCF, we establish a universal form for finite-dimensional models, which encompasses the commonly used linear, bilinear, and linear switched models as specific instances. In cases where the subspace is not invariant under the KCF, we propose a method for approximating models in general form and characterize the model's accuracy using the concept of invariance proximity. We end by discussing how the proposed framework naturally lends itself to data-driven modeling of control systems.",
        links: [
            { name: "PDF", url: "/Material/JP/2023_HaCo-auto.pdf" },
            { name: "arXiv", url: "https://arxiv.org/abs/2307.15368" },
            { name: "ScienceDirect", url: "https://doi.org/10.1016/j.automatica.2025.112722" }
        ]
    },
    {
        id: "JP8",
        type: "journal",
        title: "Recursive forward-backward EDMD: guaranteed algebraic search for Koopman invariant subspaces",
        authors: "M. Haseli, J. Cortés",
        venue: "IEEE Access 13",
        year: "2025",
        note: "61006-61025",
        pdf: "/Material/JP/2024_HaCo-access.pdf",
        abstract: "The implementation of the Koopman operator on digital computers often relies on the approximation of its action on finite-dimensional function spaces. This approximation is generally done by orthogonally projecting on the subspace. Extended Dynamic Mode Decomposition (EDMD) is a popular, special case of this projection procedure in a data-driven setting. Importantly, the accuracy of the model obtained by EDMD depends on the quality of the finite-dimensional space, specifically on how close it is to being invariant under the Koopman operator. This paper presents a data-driven algebraic search algorithm, termed Recursive Forward-Backward EDMD, for subspaces close to being invariant under the Koopman operator. Relying on the concept of temporal consistency, which measures the quality of the subspace, our algorithm recursively decomposes the search space into two subspaces with different prediction accuracy levels. The subspace with lower level of accuracy is removed if it does not reach a satisfactory threshold. The algorithm allows for tuning the level of accuracy depending on the underlying application and is endowed with convergence and accuracy guarantees.",
        links: [
            { name: "PDF", url: "/Material/JP/2024_HaCo-access.pdf" },
            { name: "IEEEXplore", url: "https://doi.org/10.1109/ACCESS.2025.3554154" },
            { name: "Code", url: "https://github.com/mhaseli/RFB-EDMD-Codes" }
        ]
    },
    {
        id: "JP7",
        type: "journal",
        title: "Koopman operators in robot learning",
        authors: "L. Shi, M. Haseli, G. Mamakoukas, D. Bruder, I. Abraham, T. Murphey, J. Cortés, K. Karydis",
        venue: "IEEE Transactions on Robotics",
        year: "to appear",
        pdf: "/Material/JP/2024_ShHaMaBrAbMuCoKa-tr.pdf",
        abstract: "Koopman operator theory offers a rigorous treatment of dynamics and has been emerging as a powerful modeling and learning-based control method enabling significant advancements across various domains of robotics. Due to its ability to represent nonlinear dynamics as a linear operator, Koopman theory offers a fresh lens through which to understand and tackle the modeling and control of complex robotic systems. Moreover, it enables incremental updates and is computationally inexpensive making it particularly appealing for real-time applications and online active learning. This review comprehensively presents recent research results on advancing Koopman operator theory across diverse domains of robotics, encompassing aerial, legged, wheeled, underwater, soft, and manipulator robotics. Furthermore, it offers practical tutorials to help new users get started as well as a treatise of more advanced topics leading to an outlook on future directions and open research questions. Taken together, these provide insights into the potential evolution of Koopman theory as applied to the field of robotics.",
        links: [
            { name: "PDF", url: "/Material/JP/2024_ShHaMaBrAbMuCoKa-tr.pdf" },
            { name: "arXiv", url: "https://arxiv.org/abs/2408.04200" }
        ]
    },
    {
        id: "JP6",
        type: "journal",
        title: "Invariance proximity: closed-form error bounds for finite-dimensional Koopman-based models",
        authors: "M. Haseli, J. Cortés",
        venue: "Systems and Control Letters",
        year: "submitted",
        pdf: "/Material/JP/2024_HaCo-scl.pdf",
        abstract: "A popular way to approximate the Koopman operator's action on a finite-dimensional subspace of functions is via orthogonal projections. The quality of the projected model directly depends on the selected subspace, specifically on how close it is to being invariant under the Koopman operator. The notion of invariance proximity provides a tight upper bound on the worst-case relative prediction error of the finite-dimensional model. However, its direct calculation is computationally challenging. This paper leverages the geometric structure behind the definition of invariance proximity to provide a closed-form expression in terms of Jordan principal angles on general inner product spaces. Unveiling this connection allows us to exploit specific isomorphisms to circumvent the computational challenges associated with spaces of functions and enables the use of existing efficient numerical routines to compute invariance proximity.",
        links: [
            { name: "PDF", url: "/Material/JP/2024_HaCo-scl.pdf" },
            { name: "arXiv", url: "https://arxiv.org/abs/2311.13033" }
        ]
    },
    {
        id: "JP4",
        type: "journal",
        title: "Generalizing dynamic mode decomposition: balancing accuracy and expressiveness in Koopman approximations",
        authors: "M. Haseli, J. Cortés",
        venue: "Automatica 153",
        year: "2023",
        note: "111001",
        pdf: "/Material/JP/2021_HaCo-auto.pdf",
        abstract: "This paper tackles the data-driven approximation of unknown dynamical systems using Koopman-operator methods. Given a dictionary of functions, these methods approximate the projection of the action of the operator on the finite-dimensional subspace spanned by the dictionary. We propose the Tunable Symmetric Subspace Decomposition algorithm to refine the dictionary, balancing its expressiveness and accuracy. Expressiveness corresponds to the ability of the dictionary to describe the evolution of as many observables as possible and accuracy corresponds to the ability to correctly predict their evolution. Based on the observation that Koopman-invariant subspaces give rise to exact predictions, we reason that prediction accuracy is a function of the degree of invariance of the subspace generated by the dictionary and provide a data-driven measure to measure invariance proximity. The proposed algorithm iteratively prunes the initial functional space to identify a refined dictionary of functions that satisfies the desired level of accuracy while retaining as much of the original expressiveness as possible. We provide a full characterization of the algorithm properties and show that it generalizes both Extended Dynamic Mode Decomposition and Symmetric Subspace Decomposition. Simulations on planar systems show the effectiveness of the proposed methods in producing Koopman approximations of tunable accuracy that capture relevant information about the dynamical system.",
        links: [
            { name: "PDF", url: "/Material/JP/2021_HaCo-auto.pdf" },
            { name: "arXiv", url: "https://arxiv.org/abs/2108.03712" },
            { name: "ScienceDirect", url: "https://doi.org/10.1016/j.automatica.2023.111001" }
        ]
    },
    {
        id: "JP3",
        type: "journal",
        title: "Temporal forward-backward consistency, not residual error, measures the prediction accuracy of extended dynamic mode decomposition",
        authors: "M. Haseli, J. Cortés",
        venue: "IEEE Control Systems Letters 7",
        year: "2023",
        note: "649-654",
        award: "2025 IEEE Control Systems Letters Outstanding Paper Award",
        pdf: "/Material/JP/2022_HaCo-csl.pdf",
        abstract: "Extended Dynamic Mode Decomposition (EDMD) is a popular data-driven method to approximate the action of the Koopman operator on a linear function space spanned by a dictionary of functions. The accuracy of EDMD model critically depends on the quality of the particular dictionary's span, specifically on how close it is to being invariant under the Koopman operator. Motivated by the observation that the residual error of EDMD, typically used for dictionary learning, does not encode the quality of the function space and is sensitive to the choice of basis, we introduce the novel concept of consistency index. We show that this measure, based on using EDMD forward and backward in time, enjoys a number of desirable qualities that make it suitable for data-driven modeling of dynamical systems: it measures the quality of the function space, it is invariant under the choice of basis, can be computed in closed form from the data, and provides a tight upper-bound for the relative root mean square error of all function predictions on the entire span of the dictionary.",
        links: [
            { name: "PDF", url: "/Material/JP/2022_HaCo-csl.pdf" },
            { name: "arXiv", url: "https://arxiv.org/abs/2207.07719" },
            { name: "IEEEXplore", url: "https://doi.org/10.1109/LCSYS.2022.3214476" },
            { name: "YouTube", url: "https://www.youtube.com/watch?v=H-T8vUXV2IU&ab_channel=USACMStudentChapter" }
        ]
    },
    {
        id: "JP2",
        type: "journal",
        title: "Parallel learning of Koopman eigenfunctions and invariant subspaces for accurate long-term prediction",
        authors: "M. Haseli, J. Cortés",
        venue: "IEEE Transactions on Control of Network Systems 8 (4)",
        year: "2021",
        note: "1833-1845",
        pdf: "/Material/JP/2020_HaCo-tcns.pdf",
        abstract: "This paper presents a parallel data-driven strategy to identify maximal finite-dimensional functional spaces invariant under the application of the Koopman operator associated to an unknown dynamical system. Our treatment builds on the Symmetric Subspace Decomposition (SSD) algorithm, a centralized method that provably finds the maximal Koopman-invariant subspace and all Koopman eigenfunctions in an arbitrary finite-dimensional functional space. A network of processors, each aware of a common dictionary of functions and equipped with a local set of data snapshots about the dynamics, repeatedly interact with each other over a directed communication graph. Each processor receives its neighbors' estimates of the invariant dictionary and refines its own estimate by applying SSD with its local data on the intersection of the subspaces spanned by its own dictionary and the neighbors' dictionaries. We identify conditions on the network topology under which the P-SSD algorithm correctly identifies the maximal Koopman-invariant subspace in the span of the original dictionary, and characterize its time, computational, and communication complexity. Additionally, we show that it is robust against communication failures and packet drops. Simulations illustrate the superior performance of the proposed parallel strategy over its centralized counterpart applied to all the data available to the network.",
        links: [
            { name: "PDF", url: "/Material/JP/2020_HaCo-tcns.pdf" },
            { name: "arXiv", url: "https://arxiv.org/abs/2005.06138" },
            { name: "IEEEXplore", url: "https://doi.org/10.1109/TCNS.2021.3088791" }
        ]
    },
    {
        id: "JP1",
        type: "journal",
        title: "Learning Koopman eigenfunctions and invariant subspaces from data: symmetric subspace decomposition",
        authors: "M. Haseli, J. Cortés",
        venue: "IEEE Transactions on Automatic Control 67 (7)",
        year: "2022",
        note: "3442-3457",
        pdf: "/Material/JP/2020_HaCo-tac.pdf",
        abstract: "This paper develops data-driven methods to identify eigenfunctions of the Koopman operator associated to a dynamical system and subspaces that are invariant under the operator. We build on Extended Dynamic Mode Decomposition (EDMD), a data-driven method that finds a finite-dimensional approximation of the Koopman operator on the span of a predefined dictionary of functions. We propose a necessary and sufficient condition to identify Koopman eigenfunctions based on the application of EDMD forward and backward in time. Checking this condition requires the comparison of the eigendecomposition of matrices whose size grows with the size of the dictionary. To address this, we propose the Symmetric Subspace Decomposition (SSD) algorithm which provably identifies the maximal Koopman-invariant subspace and the Koopman eigenfunctions in the span of the dictionary. We also introduce the Streaming Symmetric Subspace Decomposition (SSSD) algorithm, an online method that only requires a small, fixed memory and updates its estimate of the invariant subspace as new data is received. We prove that, given a data set, SSSD and SSD find the same solution.",
        links: [
            { name: "PDF", url: "/Material/JP/2020_HaCo-tac.pdf" },
            { name: "arXiv", url: "https://arxiv.org/abs/1909.01419" },
            { name: "IEEEXplore", url: "https://doi.org/10.1109/TAC.2021.3105318" }
        ]
    },

    // Conferences
    {
        id: "CP5",
        type: "conference",
        title: "Koopman operator extensions for control: bridging infinite input sequences and operator families",
        authors: "M. Haseli, I. Mezić, J. Cortés",
        venue: "Proceedings of the IEEE Conference on Decision and Control, Rio de Janeiro, Brazil",
        year: "2025",
        note: "To appear",
        abstract: "This paper investigates the connections between two existing formal extensions of Koopman operator theory to general discrete-time control systems that are not necessarily control-affine. The frameworks, namely (i) Koopman operator via infinite input sequences and (ii) Koopman control family, encode the system behavior in fundamentally different ways and rely on different function spaces. In spite of this, we connect the frameworks by defining operations that allow to go from one function space to the other, and provide precise conditions that ensure the function spaces capture the same information. Moreover, we prove that under these conditions the formal approaches are equivalent in terms of encoding the state information and multi-step trajectories in function values.",
    },
    {
        id: "CP6",
        type: "conference",
        title: "Real-time learning of predictive dynamic obstacle models for robotic motion planning",
        authors: "S. B. Kombo, M. Haseli, Skylar X. Wei, J. W. Burdick",
        venue: "Proceedings of the IEEE International Conference on Robotics and Automation",
        year: "2026",
        note: "Submitted",
        abstract: "Autonomous systems often must predict the motions of nearby agents from partial and noisy data. This paper asks and answers the question: \"can we learn, in real-time, a nonlinear predictive model of another agent's motions?\" Our online framework denoises and forecasts such dynamics using a modified sliding-window Hankel Dynamic Mode Decomposition (Hankel-DMD). Partial noisy measurements are embedded into a Hankel matrix, while an associated Page matrix enables singular-value hard thresholding (SVHT) to estimate the effective rank. A Cadzow projection enforces structured low-rank consistency, yielding a denoised trajectory and local noise variance estimates. From this representation, a time-varying Hankel-DMD lifted linear predictor is constructed for multi-step forecasts. The residual analysis provides variancetracking signals that can support downstream estimators and risk-aware planning. We validate the approach in simulation under Gaussian and heavy-tailed noise, and experimentally on a dynamic crane testbed. Results show that the method achieves stable variance-aware denoising and short-horizon prediction suitable for integration into real-time control frameworks.",
    },
    {
        id: "CP3_conf", // Reusing JP3 title but it's ACC 2023 proceeding
        type: "conference",
        title: "Temporal forward-backward consistency, not residual error, measures the prediction accuracy of extended dynamic mode decomposition",
        authors: "M. Haseli, J. Cortés",
        venue: "Proceedings of the American Control Conference, San Diego",
        year: "2023",
        pdf: "/Material/JP/2022_HaCo-csl.pdf", // Reusing Journal PDF
        abstract: "Extended Dynamic Mode Decomposition (EDMD) is a popular data-driven method to approximate the action of the Koopman operator on a linear function space spanned by a dictionary of functions. The accuracy of EDMD model critically depends on the quality of the particular dictionary's span, specifically on how close it is to being invariant under the Koopman operator. Motivated by the observation that the residual error of EDMD, typically used for dictionary learning, does not encode the quality of the function space and is sensitive to the choice of basis, we introduce the novel concept of consistency index. We show that this measure, based on using EDMD forward and backward in time, enjoys a number of desirable qualities that make it suitable for data-driven modeling of dynamical systems: it measures the quality of the function space, it is invariant under the choice of basis, can be computed in closed form from the data, and provides a tight upper-bound for the relative root mean square error of all function predictions on the entire span of the dictionary.",
        links: [
            { name: "PDF", url: "/Material/JP/2022_HaCo-csl.pdf" }
        ]
    },
    {
        id: "CP4",
        type: "conference",
        title: "Data-driven approximation of Koopman-invariant subspaces with tunable accuracy",
        authors: "M. Haseli, J. Cortés",
        venue: "Proceedings of the American Control Conference, New Orleans, Louisiana",
        year: "2021",
        note: "pp. 469-474",
        award: "2021 ACC Best Student Paper Award",
        pdf: "/Material/CP/2021_HaCo-acc.pdf",
        abstract: "This paper studies the problem of identifying finite-dimensional functional spaces that are close (within a predefined level of accuracy) to being invariant under the application of the Koopman operator. Given a dictionary of functions spanning a finite-dimensional functional space and a set of data snapshots gathered from a potentially nonlinear dynamical system, we define a measure of how close a functional space in the span of the dictionary is to being invariant under the Koopman operator. This measure provides a way of determining the prediction accuracy of the functional space. Given a desired level of accuracy, we propose a numerical algorithm, termed Tunable Symmetric Subspace Decomposition (T-SSD), to find a dictionary of functions with elements in the span of the original dictionary that satisfies it. Starting from the original dictionary, the T-SSD algorithm proceeds by iteratively removing the functions that violate the accuracy bound. We prove that T-SSD converges to a dictionary satisfying the accuracy criteria after a finite number of iterations. A simulation example demonstrates the efficacy of our method.",
        links: [
            { name: "PDF", url: "/Material/CP/2021_HaCo-acc.pdf" },
            { name: "IEEEXplore", url: "https://doi.org/10.23919/ACC50511.2021.9483259" }
        ]
    },
    {
        id: "CP3",
        type: "conference",
        title: "Fast identification of Koopman-invariant subspaces: parallel symmetric subspace decomposition",
        authors: "M. Haseli, J. Cortés",
        venue: "Proceedings of the American Control Conference, Denver, Colorado",
        year: "2020",
        note: "pp. 4545-4550",
        pdf: "/Material/CP/2020_HaCo-acc.pdf",
        abstract: "This paper presents a parallel data-driven method to identify finite-dimensional subspaces that are invariant under the Koopman operator describing a dynamical system. Our approach builds on Symmetric Subspace Decomposition (SSD), which is a centralized scheme to find Koopman-invariant subspaces and Koopman eigenfunctions. Given a dictionary of functions, a collection of processors communicating through a strongly connected time-invariant directed graph, and a set of data snapshots gathered from the dynamical system, our approach distributes the data snapshots among the processors and initializes each processor with the original dictionary. Then, at each iteration, processors prune their dictionary by using the information received from their neighbors and applying the SSD method on the pruned dictionary with their local data. We prove that the algorithm terminates in a finite number of iterations and that the processors, upon termination, reach consensus on the maximal Koopman-invariant subspace in the span of the dictionary (and is therefore equivalent to SSD). A simulation example shows significant gains in time complexity by the proposed method over SSD.",
        links: [
            { name: "PDF", url: "/Material/CP/2020_HaCo-acc.pdf" },
            { name: "IEEEXplore", url: "https://ieeexplore.ieee.org/document/9147223" }
        ]
    },
    {
        id: "CP2",
        type: "conference",
        title: "Efficient identification of linear evolutions in nonlinear vector fields: Koopman invariant subspaces",
        authors: "M. Haseli, J. Cortés",
        venue: "Proceedings of the IEEE Conference on Decision and Control, Nice, France",
        year: "2019",
        note: "pp. 1746-1751",
        pdf: "/Material/CP/2019_HaCo-cdc.pdf",
        abstract: "This paper presents a data-driven approach to identify finite-dimensional Koopman invariant subspaces and eigenfunctions of the Koopman operator. Given a dictionary of functions and a collection of data snapshots of the dynamical system, we rely on the Extended Dynamic Mode Decomposition (EDMD) method to approximate the Koopman operator. We start by establishing that, if a function in the space generated by the dictionary evolves linearly according to the dynamics, then it must correspond to an eigenvector of the matrix obtained by EDMD. A counterexample shows that this necessary condition is however not sufficient. We then propose a necessary and sufficient condition for the identification of linear evolutions according to the dynamics based on the application of EDMD forward and backward in time. Given the high computational cost of checking this condition, we propose an alternative characterization based on the identification of the largest Koopman invariant subspace in the span of the dictionary. This leads us to introduce the Symmetric Subspace Decomposition strategy to identify linear evolutions using efficient linear algebraic methods. Various simulations illustrate our results.",
        links: [
            { name: "PDF", url: "/Material/CP/2019_HaCo-cdc.pdf" },
            { name: "IEEEXplore", url: "https://ieeexplore.ieee.org/document/9029955" }
        ]
    },
    {
        id: "CP1",
        type: "conference",
        title: "Approximating the Koopman operator using noisy data: noise-resilient extended dynamic mode decomposition",
        authors: "M. Haseli, J. Cortés",
        venue: "Proceedings of the American Control Conference, Philadelphia, Pennsylvania",
        year: "2019",
        note: "pp. 5499-5504",
        pdf: "/Material/CP/2019_HaCo-acc.pdf",
        abstract: "This paper presents a data-driven method to find a finite-dimensional approximation for the Koopman operator using noisy data. The proposed method is a modification of Extended Dynamic Mode Decomposition which finds an approximation for the projection of the Koopman operator on a subspace spanned by a predefined dictionary of functions. Unlike the Extended Dynamic Mode Decomposition which is based on least squares method, the presented method is based on element-wise weighted total least squares which enables one to find a consistent approximation when the data come from a static linear relationship and the noise at different times are not identically distributed. Even though the aforementioned method is consistent, it leads to a nonconvex optimization problem. To alleviate this problem, we prove that under some conditions the nonconvex optimization problem has a common minimizer with a different method based on total least squares for which one can find the solution in closed form.",
        links: [
            { name: "PDF", url: "/Material/CP/2019_HaCo-acc.pdf" },
            { name: "IEEEXplore", url: "https://ieeexplore.ieee.org/document/8814684" }
        ]
    },

    // Thesis
    {
        id: "Thesis",
        type: "thesis",
        title: "Data-Driven System Analysis Using the Koopman Operator: Eigenfunctions, Invariant Subspaces, and Accuracy Bounds",
        authors: "M. Haseli",
        venue: "University of California, San Diego",
        year: "2022",
        award: "2023 Robert Skelton Systems and Control Dissertation Award",
        pdf: "/Material/JP/PhDThesis-MasihHaseli-22.pdf",
        abstract: "Ranging from natural phenomena such as biological and chemical systems to artificial technologies such as mechanical and electronic devices, dynamical systems form an inseparable part of the world surrounding us. Understanding, modeling, predicting, and controlling such systems have always been the leading goals of science and engineering. While in the past centuries, the most advances in the field of dynamical systems were mainly analytical and based on limited observations, in the last decade, we have witnessed a rapid growth in our ability to gather, store, and process data. This data-driven revolution has imposed a high demand for new viewpoints and systematic structures that can effectively utilize the available modern tools. The Koopman operator theory for dynamical systems has recently emerged as a powerful tool for the analysis and control of nonlinear dynamical systems. It allows for the representation of nonlinear dynamics as a linear operator on an infinite-dimensional space of functions, enabling the use of linear system theory and data-driven methods. This thesis advances the state of the art in data-driven methods for Koopman operator approximation, specifically focusing on the identification of invariant subspaces and eigenfunctions, and providing rigorous error bounds for finite-dimensional approximations.",
        links: [
            { name: "PDF", url: "/Material/JP/PhDThesis-MasihHaseli-22.pdf" },
            { name: "eScholarship", url: "https://escholarship.org/uc/item/9wc8n8r0" }
        ]
    }
];

export type ResearchTheme = {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    image: string;
    relatedPublications: string[]; // Publication IDs
};

export const researchThemes: ResearchTheme[] = [
    {
        id: "koopman",
        title: "Koopman Operator Theory",
        shortDescription: "Linear representations of nonlinear dynamics",
        description: "The Koopman operator represents a dynamical system via a linear operator acting on a vector space of functions. This enables one to utilize regular algebraic structures to study complex nonlinear systems. Based on these algebraic structures, we have established theoretical guarantees (in the form of necessary and sufficient conditions) for accurately identifying Koopman eigenfunctions, eigenvalues, and invariant subspaces. The Symmetric Subspace Decomposition (SSD) algorithm provably identifies the maximal Koopman-invariant subspace and all eigenfunctions in the span of a given dictionary. We have also introduced the notion of invariance proximity, an objective accuracy measure that provides tight upper bounds on prediction error.",
        image: "/images/koopman_operator.png",
        relatedPublications: ["JP1", "JP2", "JP3", "JP4", "JP6", "JP8", "Thesis"]
    },
    {
        id: "control",
        title: "Rigorous Data-Driven Control",
        shortDescription: "Formal extension of Koopman operator theory to control systems",
        description: "Extending Koopman operator theory to control systems requires addressing the fundamental difference between 'input' and 'state'. We developed the Koopman Control Family (KCF), a comprehensive mathematical framework that fully encapsulates the behavior of general (not necessarily control-affine) nonlinear control systems. This framework leads to universal finite-dimensional forms termed 'input-state separable' models, which encompass commonly used linear, bilinear, and switched linear models as special cases. Our recent work establishes equivalence between KCF and other Koopman extensions for control, providing a unified theoretical foundation. The KCF framework naturally lends itself to rigorous data-driven modeling and robust learning.",
        image: "/images/data_driven_control.png",
        relatedPublications: ["JP5", "JP9", "CP5"]
    },
    {
        id: "algorithms",
        title: "Scalable Data-Driven Modeling and Prediction",
        shortDescription: "Streaming data sets, parallel computing, and identification with tunable accuracy",
        description: "We have developed a suite of algorithms addressing computational challenges in Koopman-based modeling. The Streaming SSD (SSSD) algorithm enables real-time computation on embedded systems by processing data incrementally with fixed memory. The Parallel SSD (P-SSD) algorithm achieves linear speedup with the number of processors and is robust against packet drops and communication failures. The Tunable SSD (T-SSD) algorithm allows users to balance model accuracy and expressiveness through a single parameter, generalizing both exact SSD and the widely-used EDMD method.",
        image: "/images/parallel_algorithms.png",
        relatedPublications: ["JP2", "JP4", "CP3", "CP4"]
    },
    {
        id: "robotics",
        title: "Real-Time Algorithms for Robotics",
        shortDescription: "Fast adaptive methods for autonomous systems",
        description: "Koopman operator methods offer unique advantages for robotics: they enable linear computations for nonlinear prediction, support incremental online adaptation as new data arrives, and are computationally efficient enough for real-time execution on embedded systems. These properties make them ideal for path planning and control in complex environments, handling noisy sensor data through robust estimation techniques, and adapting to changing dynamics without expensive retraining—critical capabilities for autonomous robots, self-driving vehicles, and systems operating in unstructured environments.",
        image: "/images/robotics_realtime.png",
        relatedPublications: ["JP7", "CP6", "CP1"]
    }
];

export type Award = {
    year: string;
    title: string;
    organization: string;
    relatedPublication?: string;
};

export const awards: Award[] = [
    {
        year: "2025",
        title: "IEEE Control Systems Letters Outstanding Paper Award",
        organization: "IEEE Control Systems Society",
        relatedPublication: "JP3"
    },
    {
        year: "2023",
        title: "Robert Skelton Systems and Control Dissertation Award",
        organization: "University of California San Diego",
        relatedPublication: "Thesis"
    },
    {
        year: "2021",
        title: "ACC Best Student Paper Award",
        organization: "American Control Conference",
        relatedPublication: "CP4"
    }
];
