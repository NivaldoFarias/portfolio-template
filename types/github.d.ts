export declare namespace Github {
    export interface GetRepository {
        id: number;
        node_id: string;
        name: string;
        full_name: string;
        owner: {
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            gravatar_id: string;
            url: string;
            html_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            starred_url: string;
            subscriptions_url: string;
            organizations_url: string;
            repos_url: string;
            events_url: string;
            received_events_url: string;
            type: string;
            site_admin: boolean;
        };
        private: boolean;
        html_url: string;
        description: string;
        fork: boolean;
        url: string;
        archive_url: string;
        assignees_url: string;
        blobs_url: string;
        branches_url: string;
        collaborators_url: string;
        comments_url: string;
        commits_url: string;
        compare_url: string;
        contents_url: string;
        contributors_url: string;
        deployments_url: string;
        downloads_url: string;
        events_url: string;
        forks_url: string;
        git_commits_url: string;
        git_refs_url: string;
        git_tags_url: string;
        git_url: string;
        issue_comment_url: string;
        issue_events_url: string;
        issues_url: string;
        keys_url: string;
        labels_url: string;
        languages_url: string;
        merges_url: string;
        milestones_url: string;
        notifications_url: string;
        pulls_url: string;
        releases_url: string;
        ssh_url: string;
        stargazers_url: string;
        statuses_url: string;
        subscribers_url: string;
        subscription_url: string;
        tags_url: string;
        teams_url: string;
        trees_url: string;
        clone_url: string;
        mirror_url: string;
        hooks_url: string;
        svn_url: string;
        homepage: string;
        language: null;
        forks_count: number;
        forks: number;
        stargazers_count: number;
        watchers_count: number;
        watchers: number;
        size: number;
        default_branch: string;
        open_issues_count: number;
        open_issues: number;
        is_template: boolean;
        topics: string[];
        has_issues: boolean;
        has_projects: boolean;
        has_wiki: boolean;
        has_pages: boolean;
        has_downloads: boolean;
        has_discussions: boolean;
        archived: boolean;
        disabled: boolean;
        visibility: string;
        pushed_at: string;
        created_at: string;
        updated_at: string;
        permissions: {
            pull: boolean;
            push: boolean;
            admin: boolean;
        };
        allow_rebase_merge: boolean;
        template_repository: {
            id: number;
            node_id: string;
            name: string;
            full_name: string;
            owner: {
                login: string;
                id: number;
                node_id: string;
                avatar_url: string;
                gravatar_id: string;
                url: string;
                html_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                starred_url: string;
                subscriptions_url: string;
                organizations_url: string;
                repos_url: string;
                events_url: string;
                received_events_url: string;
                type: string;
                site_admin: boolean;
            };
            private: boolean;
            html_url: string;
            description: string;
            fork: boolean;
            url: string;
            archive_url: string;
            assignees_url: string;
            blobs_url: string;
            branches_url: string;
            collaborators_url: string;
            comments_url: string;
            commits_url: string;
            compare_url: string;
            contents_url: string;
            contributors_url: string;
            deployments_url: string;
            downloads_url: string;
            events_url: string;
            forks_url: string;
            git_commits_url: string;
            git_refs_url: string;
            git_tags_url: string;
            git_url: string;
            issue_comment_url: string;
            issue_events_url: string;
            issues_url: string;
            keys_url: string;
            labels_url: string;
            languages_url: string;
            merges_url: string;
            milestones_url: string;
            notifications_url: string;
            pulls_url: string;
            releases_url: string;
            ssh_url: string;
            stargazers_url: string;
            statuses_url: string;
            subscribers_url: string;
            subscription_url: string;
            tags_url: string;
            teams_url: string;
            trees_url: string;
            clone_url: string;
            mirror_url: string;
            hooks_url: string;
            svn_url: string;
            homepage: string;
            language: null;
            forks: number;
            forks_count: number;
            stargazers_count: number;
            watchers_count: number;
            watchers: number;
            size: number;
            default_branch: string;
            open_issues: number;
            open_issues_count: number;
            is_template: boolean;
            license: {
                key: string;
                name: string;
                url: string;
                spdx_id: string;
                node_id: string;
                html_url: string;
            };
            topics: string[];
            has_issues: boolean;
            has_projects: boolean;
            has_wiki: boolean;
            has_pages: boolean;
            has_downloads: boolean;
            archived: boolean;
            disabled: boolean;
            visibility: string;
            pushed_at: string;
            created_at: string;
            updated_at: string;
            permissions: {
                admin: boolean;
                push: boolean;
                pull: boolean;
            };
            allow_rebase_merge: boolean;
            temp_clone_token: string;
            allow_squash_merge: boolean;
            allow_auto_merge: boolean;
            delete_branch_on_merge: boolean;
            allow_merge_commit: boolean;
            subscribers_count: number;
            network_count: number;
        };
        temp_clone_token: string;
        allow_squash_merge: boolean;
        allow_auto_merge: boolean;
        delete_branch_on_merge: boolean;
        allow_merge_commit: boolean;
        subscribers_count: number;
        network_count: number;
        license: {
            key: string;
            name: string;
            spdx_id: string;
            url: string;
            node_id: string;
        };
        organization: {
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            gravatar_id: string;
            url: string;
            html_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            starred_url: string;
            subscriptions_url: string;
            organizations_url: string;
            repos_url: string;
            events_url: string;
            received_events_url: string;
            type: string;
            site_admin: boolean;
        };
        parent: {
            id: number;
            node_id: string;
            name: string;
            full_name: string;
            owner: {
                login: string;
                id: number;
                node_id: string;
                avatar_url: string;
                gravatar_id: string;
                url: string;
                html_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                starred_url: string;
                subscriptions_url: string;
                organizations_url: string;
                repos_url: string;
                events_url: string;
                received_events_url: string;
                type: string;
                site_admin: boolean;
            };
            private: boolean;
            html_url: string;
            description: string;
            fork: boolean;
            url: string;
            archive_url: string;
            assignees_url: string;
            blobs_url: string;
            branches_url: string;
            collaborators_url: string;
            comments_url: string;
            commits_url: string;
            compare_url: string;
            contents_url: string;
            contributors_url: string;
            deployments_url: string;
            downloads_url: string;
            events_url: string;
            forks_url: string;
            git_commits_url: string;
            git_refs_url: string;
            git_tags_url: string;
            git_url: string;
            issue_comment_url: string;
            issue_events_url: string;
            issues_url: string;
            keys_url: string;
            labels_url: string;
            languages_url: string;
            merges_url: string;
            milestones_url: string;
            notifications_url: string;
            pulls_url: string;
            releases_url: string;
            ssh_url: string;
            stargazers_url: string;
            statuses_url: string;
            subscribers_url: string;
            subscription_url: string;
            tags_url: string;
            teams_url: string;
            trees_url: string;
            clone_url: string;
            mirror_url: string;
            hooks_url: string;
            svn_url: string;
            homepage: string;
            language: null;
            forks_count: number;
            stargazers_count: number;
            watchers_count: number;
            size: number;
            default_branch: string;
            open_issues_count: number;
            is_template: boolean;
            topics: string[];
            has_issues: boolean;
            has_projects: boolean;
            has_wiki: boolean;
            has_pages: boolean;
            has_downloads: boolean;
            archived: boolean;
            disabled: boolean;
            visibility: string;
            pushed_at: string;
            created_at: string;
            updated_at: string;
            permissions: {
                admin: boolean;
                push: boolean;
                pull: boolean;
            };
            allow_rebase_merge: boolean;
            temp_clone_token: string;
            allow_squash_merge: boolean;
            allow_auto_merge: boolean;
            delete_branch_on_merge: boolean;
            allow_merge_commit: boolean;
            subscribers_count: number;
            network_count: number;
            license: {
                key: string;
                name: string;
                url: string;
                spdx_id: string;
                node_id: string;
                html_url: string;
            };
            forks: number;
            open_issues: number;
            watchers: number;
        };
        source: {
            id: number;
            node_id: string;
            name: string;
            full_name: string;
            owner: {
                login: string;
                id: number;
                node_id: string;
                avatar_url: string;
                gravatar_id: string;
                url: string;
                html_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                starred_url: string;
                subscriptions_url: string;
                organizations_url: string;
                repos_url: string;
                events_url: string;
                received_events_url: string;
                type: string;
                site_admin: boolean;
            };
            private: boolean;
            html_url: string;
            description: string;
            fork: boolean;
            url: string;
            archive_url: string;
            assignees_url: string;
            blobs_url: string;
            branches_url: string;
            collaborators_url: string;
            comments_url: string;
            commits_url: string;
            compare_url: string;
            contents_url: string;
            contributors_url: string;
            deployments_url: string;
            downloads_url: string;
            events_url: string;
            forks_url: string;
            git_commits_url: string;
            git_refs_url: string;
            git_tags_url: string;
            git_url: string;
            issue_comment_url: string;
            issue_events_url: string;
            issues_url: string;
            keys_url: string;
            labels_url: string;
            languages_url: string;
            merges_url: string;
            milestones_url: string;
            notifications_url: string;
            pulls_url: string;
            releases_url: string;
            ssh_url: string;
            stargazers_url: string;
            statuses_url: string;
            subscribers_url: string;
            subscription_url: string;
            tags_url: string;
            teams_url: string;
            trees_url: string;
            clone_url: string;
            mirror_url: string;
            hooks_url: string;
            svn_url: string;
            homepage: string;
            language: null;
            forks_count: number;
            stargazers_count: number;
            watchers_count: number;
            size: number;
            default_branch: string;
            open_issues_count: number;
            is_template: boolean;
            topics: string[];
            has_issues: boolean;
            has_projects: boolean;
            has_wiki: boolean;
            has_pages: boolean;
            has_downloads: boolean;
            archived: boolean;
            disabled: boolean;
            visibility: string;
            pushed_at: string;
            created_at: string;
            updated_at: string;
            permissions: {
                admin: boolean;
                push: boolean;
                pull: boolean;
            };
            allow_rebase_merge: boolean;
            temp_clone_token: string;
            allow_squash_merge: boolean;
            allow_auto_merge: boolean;
            delete_branch_on_merge: boolean;
            allow_merge_commit: boolean;
            subscribers_count: number;
            network_count: number;
            license: {
                key: string;
                name: string;
                url: string;
                spdx_id: string;
                node_id: string;
                html_url: string;
            };
            forks: number;
            open_issues: number;
            watchers: number;
            security_and_analysis: {
                advanced_security: {
                    status: string;
                };
                secret_scanning: {
                    status: string;
                };
                secret_scanning_push_protection: {
                    status: string;
                };
            };
        };
    }

    export interface GetReadme {
        type: string;
        encoding: string;
        size: number;
        name: string;
        path: string;
        content: string;
        sha: string;
        url: string;
        git_url: string;
        html_url: string;
        download_url: string;
        _links: {
            git: string;
            self: string;
            html: string;
        };
    }

    export type ListUserRepos = {
        id: number;
        node_id: string;
        name: string;
        full_name: string;
        owner: {
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            gravatar_id: string;
            url: string;
            html_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            starred_url: string;
            subscriptions_url: string;
            organizations_url: string;
            repos_url: string;
            events_url: string;
            received_events_url: string;
            type: string;
            site_admin: boolean;
        };
        private: boolean;
        html_url: string;
        description: string;
        fork: boolean;
        url: string;
        archive_url: string;
        assignees_url: string;
        blobs_url: string;
        branches_url: string;
        collaborators_url: string;
        comments_url: string;
        commits_url: string;
        compare_url: string;
        contents_url: string;
        contributors_url: string;
        deployments_url: string;
        downloads_url: string;
        events_url: string;
        forks_url: string;
        git_commits_url: string;
        git_refs_url: string;
        git_tags_url: string;
        git_url: string;
        issue_comment_url: string;
        issue_events_url: string;
        issues_url: string;
        keys_url: string;
        labels_url: string;
        languages_url: string;
        merges_url: string;
        milestones_url: string;
        notifications_url: string;
        pulls_url: string;
        releases_url: string;
        ssh_url: string;
        stargazers_url: string;
        statuses_url: string;
        subscribers_url: string;
        subscription_url: string;
        tags_url: string;
        teams_url: string;
        trees_url: string;
        clone_url: string;
        mirror_url: string;
        hooks_url: string;
        svn_url: string;
        homepage: string;
        language: string | null;
        forks_count: number;
        stargazers_count: number;
        watchers_count: number;
        size: number;
        default_branch: string;
        open_issues_count: number;
        is_template: boolean;
        topics: string[];
        has_issues: boolean;
        has_projects: boolean;
        has_wiki: boolean;
        has_pages: boolean;
        has_downloads: boolean;
        archived: boolean;
        disabled: boolean;
        visibility: string;
        pushed_at: string;
        created_at: string;
        updated_at: string;
        permissions: {
            admin: boolean;
            push: boolean;
            pull: boolean;
        };
        allow_rebase_merge: boolean;
        template_repository: null;
        temp_clone_token: string;
        allow_squash_merge: boolean;
        allow_auto_merge: boolean;
        delete_branch_on_merge: boolean;
        allow_merge_commit: boolean;
        subscribers_count: number;
        network_count: number;
        license: {
            key: string;
            name: string;
            url: string;
            spdx_id: string;
            node_id: string;
            html_url: string;
        };
        forks: number;
        open_issues: number;
        watchers: number;
    };
}
