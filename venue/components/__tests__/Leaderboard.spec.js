import { mount } from "@vue/test-utils";
import Vue from "vue";
import Buefy from "buefy";

import Leaderboard from "../Leaderboard.vue";

describe("Leaderboard.vue", () => {
  let mountOptions = {};
  let propsData = {};
  let vuex = {};

  beforeAll(() => {
    Vue.use(Buefy);
  });

  beforeEach(() => {
    propsData = {};
    vuex = {
      user: {
        isAuthenticated: false
      },
      leaderboard: {
        rankings: [
          {
            username: "ironman",
            rank: 1,
            total_posts: 1,
            total_points: 105,
            total_tokens: 120000
          }
        ]
      }
    };

    mountOptions = {
      propsData,
      mocks: {
        $store: {
          state: vuex
        }
      }
    };
  });

  test("renders Leaderboard", () => {
    const wrapper = mount(Leaderboard, mountOptions);
    expect(wrapper.text()).toContain("ironman");
    expect(wrapper.text()).toContain("120,000");
  });
});
