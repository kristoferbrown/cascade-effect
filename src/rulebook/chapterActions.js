// import { useContext } from "react";
// import { RulebookContext } from "../context/rulebookContext";
// import Break from "../components/break/break";
import ChapterIntroSpread from "../components/chapter-intro-spread/chapter-intro-spread";
import Section from "../components/section/section";
// import Crosslink from "../components/crosslink/crosslink";
import ChallengeParams from "../components/challengeParams/challengeParams";

function ChapterActions() {
  // const { topicMap } = useContext(RulebookContext);
  // const linkMap = topicMap.current;

  return (
    <Section
      coordinates={"5"}
      header="Actions"
      introContent={
        <ChapterIntroSpread
          chapterNumber={5}
          title="Actions"
          leftPageContent={
            <>
              <h2>Actions out of Combat</h2>
              <p>
                Outside of combat you are free to do anything you describe, and the GM will create specific Challenges
                for you as you run into them. The GM may also ask you to take specific reactions to see how you notice
                or respond to something.
              </p>
            </>
          }
          rightPageContent={
            <>
              <h2>Actions in Combat</h2>
              <p>
                In combat, the actions you take will be from the list in this chapter. If you wish to do something not
                directly covered by these actions, you can use the Improvise action. All actions in combat are either an
                inhale or exhale action, or a reaction.
              </p>
            </>
          }
        ></ChapterIntroSpread>
      }
    >
      <Section header="Exhale Actions">
        <p>
          Exhale actions allow you to attack your enemies and create supernatural effects. Each will involve a Challenge
          that requires the indicated Metabolism pairs and has the indicated Risk and Effort levels, typically medium.
          They also specify bonuses you can add when allocating Metabolism points, typically equal to a specified
          Style's rank, and bonuses you can add when counting Progress, typically equal to the Size of the weapon you
          are using. Each may have multiple Goals, these are typically metric Goals where each point of Progress applied
          to them increases the potency of an effect. For attacks specifically, they all have the Goal Threat, allowing
          you to damage your target and a secondary Goal that applies a restrictive state.
        </p>
        <Section header="Melee Attack">
          <ChallengeParams
            pair={{ fight: true, near: true }}
            risk={"Medium"}
            effort={"Medium"}
            allocBonus={"Smooth Style"}
            progBonus={"Weapon Size"}
            goals={["Threat", "Off Balance"]}
          />
          <p>You take a swing at an adjacent opponent with whatever weapon you have in hand.</p>
          <p>The amount of Progress applied to the Threat Goal is dealt to the target as Threat.</p>
          <p>
            The target gains the Off Balance state with an intensity equal to the Progress applied to Off Balance Goal.
            The amount of Progress you apply to this Goal cannot exceed your weapon's Size.
          </p>
          <p>This attack provokes a Melee Defense reaction.</p>
        </Section>
        <Section header="Ranged Attack">
          <ChallengeParams
            pair={{ fight: true, far: true }}
            risk={"Medium"}
            effort={"Medium"}
            allocBonus={"Sharp Style"}
            progBonus={"Weapon Size"}
            goals={["Threat", "Suppressed"]}
          />
          <p>You fire a pistol, throw a stone, shoot an arrow, or unleash a burst automatic gunfire at an opponent.</p>
          <p>The amount of Progress applied to the Threat Goal is dealt to the target as Threat.</p>
          <p>
            The target gains the Suppressed state with an intensity equal to the Progress applied to the Suppressed
            Goal. The amount of Progress you apply to this Goal cannot exceed your weapon's Size.
          </p>
          <p>This attack provokes a Ranged Defense reaction.</p>
        </Section>
        <Section header="Unarmed Attack">
          <ChallengeParams
            pair={{ fight: true, self: true }}
            risk={"Medium"}
            effort={"Medium"}
            allocBonus={"Strong Style"}
            goals={["Threat", "Grappled"]}
          />
          <p>You lash out at an adjacent opponent with a punch, kick, elbow, grab, shove, or other blow.</p>
          <p>The amount of Progress applied to the Threat Goal is dealt to the target as Threat.</p>
          <p>
            The target gains the Grappled state with an intensity equal to the Progress applied to the Grappled goal.
            You can only use the Grappled Goal if you have a free hand, but you can always use the Threat Goal.
          </p>
          <p>
            If an this attack would cause the target to gain the Dying state, they instead gain the Unconscious state.
          </p>
          <p>This attack provokes a Unarmed Defense reaction. </p>
        </Section>
        <Section header="Induce a Cascade Event">
          <p>
            Each Entanglement has a Style can grant the ability to create an a supernatural effect by inducing a cascade
            event. These events are variable, but they're typically done as exhale actions. See the definition of each
            specific event for further details regarding it.
          </p>
        </Section>
      </Section>

      <Section header="Inhale Actions">
        <p>
          Basic actions can be done as either your inhale or exhale action, or over the course of a few seconds out of
          combat. These actions often do not require Challenges, so they can be taken without spending any resources.
          However, some provide ways to use a Challenge to improve their effects. All basic actions are improved by and
          depend on the associated Action Bonus, but can still provide a useful benefit when this bonus is 0. If any
          Challenge is involved, this bonus is added to the Progress.
        </p>
        <Section header="Aim">
          <p>You take a moment to line up an attack.</p>
          <p>Your next attack taken this turn against a chosen target is Prepared. </p>
          <p>If this target is behind full cover, the Prepared attack treats it as partial cover. </p>
        </Section>
        <Section header="Elude">
          <p>You prepare to defend yourself or drop deeper into cover. </p>
          <p>Your next defense Reaction is Prepared.</p>
          <p>
            If you are in, or use the free movement from this action to enter partial cover, you may choose to duck
            behind it. If you do, it immediately becomes full cover preventing attacks to or from anyone you have cover
            from.
          </p>
          <p>
            If you are already in full cover from all enemies, or are otherwise well concealed when you take this
            action, you may choose to gain the Hidden State.
          </p>
        </Section>
        <Section header="Heal">
          <p>
            The visceral, desperate desire to heal one's injuries leads all entangled people to develop the ability to
            instinctively repair their worst injuries. By drawing on resources like clotting factors previously sublimed
            into the hidden body you can roughly seal physical wounds just enough to keep moving.
          </p>
          <p>
            Restore the capacity of one of your injured Physical Metabolisms from 0 to 1, removing it's Injured state.
            The current value remains at 0. This action cannot remove the Dying state.
          </p>
          <p>
            If you have appropriate medical supplies in hand, you can use them as the scaffolding needed to Heal a
            person other than yourself.
          </p>
        </Section>
        <Section header="Improvise">
          <p>You come up with a clever plan to give yourself or an ally an edge, or hinder an enemy.</p>
          <p>
            Execute a plan, stunt, ruse, collusion, or leverage a skill in a way that could plausibly improve the
            outcome of an action you are about to take, or you predict someone else is about to take. The GM must agree
            that this plan has a chance of being viable, if not you must choose a different inhale action. You can do
            one of the following:
          </p>
          <ul>
            <li>Leverage something about the situation to give yourself or an ally Advantage.</li>
            <li>Leverage something about the situation to give an enemy Disadvantage.</li>
            <li>Apply a Trait you have that is relevant to the situation to give yourself or an ally Advantage.</li>
          </ul>
          <p>
            When you take the planned action, or the target takes the action you predicted, Advantage or Disadvantage is
            applied to it. If the predicted action does not occur before your next turn, this benefit is lost.
          </p>
        </Section>
        <Section header="Interact">
          <p>You use or move an object within reach. </p>
          <p>
            You can use an item in hand, draw, stow, or swap something in hand for something else, or use a free hand to
            interact with an uncontested item within reach. For example, use a tool, reload a weapon, grab a loose
            object, flip a switch, pull an item from a bag, open a door, or use a screen.
          </p>
          <p>
            If this action can't be done easily in a brief moment, for example moving a heavy object, navigating an
            unfamiliar user interface, or picking a lock, the GM may require a Challenge, typically requiring
            Fight+Near, to successfully complete the action.
          </p>
          <p>
            You can also use this action to maintain or escape grapples. If you are grappling someone, you can use
            Interact to maintain their Grappled state at it's current intensity, otherwise it goes away at the end of
            your turn. If you are in the Grappled state, you can use this action to trigger your Unarmed Defense
            Reaction as if the current intensity of your Grappled state was just inflicted on you.
          </p>
        </Section>
        <Section header="Manipulate">
          <p>
            You attempt to influence someone else psychologically or socially, threatening, taunting, distracting, or
            de-escalating them.
          </p>
          <p>
            Pick a target that can hear and see you and make a Focus+Far Challenge that triggers a Low Effort Willpower
            reaction in the target. If the Reaction's result doesn't exceed your Challenge's result, the target gains a
            State of your choice between Afraid, Calmed, Enthralled, or Taunted with intensity 1 until removed or until
            the start of your next turn.
          </p>
        </Section>
        <Section header="Move">
          <p>You dash from one location to another, traversing any obstacles in your way. </p>
          <p>
            Make a low Risk Challenge using any Metabolism pair. The amount of Progress you get is the number of meters
            you can move, plus 1 meter for the free movement provided by taking any inhale action.
          </p>
          <p>
            Spaces containing difficult terrain or obstacles may cost more meters of movement than 1, or increase the
            Risk or Effort of the Challenge. See the rules for terrain in the combat chapter.
          </p>
        </Section>
        <Section header="Prime">
          <p>You center yourself and concentrate on gathering the resources needed to induce a cascade event.</p>
          <p>
            The next cascade event you induce is Prepared. When you induce it, the limits on the amount of Progress you
            can assign to any of its Goals is doubled.
          </p>
        </Section>
        <Section header="Rest">
          <p>You take a moment to reorient and catch your breath.</p>
          <p>
            Choose one Metabolism to fully refill, and reduce the intensity of a State you are in by 1. This can't
            reduce states caused by an ongoing physical condition, such as Grappled, or injuries and dissociation.
          </p>
          <p>
            If you use the deep breath option to Rest with both your inhale and exhale actions, remove all reducible
            states entirely.
          </p>
        </Section>
      </Section>

      <Section header="Reactions" topicKey="reactionsList">
        <p>
          Reactions happen outside of your turn in response to the actions of others. There is no limit to the number
          you can take in a turn. When something provokes a Reaction from you, you must take this Reaction, even if you
          don't or can't allocate any Metabolism points to it.
        </p>
        <p>
          Each will involve a Challenge that requires the indicated Metabolism pairs and has the indicated Risk and
          Effort levels. They also specify bonuses you can add when allocating Metabolism points, typically equal to a
          specified Style's rank, and sometimes a bonus applied when counting Progress, such as the defense rating of
          armor you're wearing.
        </p>
        <Section header="Melee Defense" topicKey="meleeDefenseReaction">
          <ChallengeParams
            pair={{ flight: true, near: true }}
            risk={"Low"}
            effort={"Medium"}
            allocBonus={"Mobile Style"}
            progBonus={"Armor Rating"}
            goals={["Defense"]}
          />
          <p>You deflect or dodge a melee weapon attack.</p>
          <p>
            Each point applied to Defense removes a removes a point of Threat, or a point from your choice of any other
            Goal, inflicted by the triggering attack.
          </p>
        </Section>
        <Section header="Ranged Defense" topicKey="rangedDefenseReaction">
          <ChallengeParams
            pair={{ flight: true, far: true }}
            risk={"Low"}
            effort={"Medium"}
            allocBonus={"Quick Style"}
            progBonus={"Armor Rating"}
            goals={["Defense"]}
          />
          <p>You attempt to predict your opponent's aim and get out of the path of their projectiles.</p>
          <p>
            Each point applied to Defense removes a removes a point of Threat, or a point from your choice of any other
            Goal, inflicted by the triggering attack.
          </p>
        </Section>
        <Section header="Unarmed Defense" topicKey="unarmedDefenseReaction">
          <ChallengeParams
            pair={{ flight: true, self: true }}
            risk={"Low"}
            effort={"Medium"}
            allocBonus={"Tough Style"}
            progBonus={"Armor Rating"}
            goals={["Defense"]}
          />
          <p>You dodge, block, or endure a blow, or twist away from a grab.</p>
          <p>
            Each point applied to Defense removes a removes a point of Threat, or a point from your choice of any other
            Goal, inflicted by the triggering attack.
          </p>
        </Section>
        <Section header="Intuition">
          <ChallengeParams
            pair={{ focus: true, far: true }}
            risk={"Medium"}
            effort={"Low"}
            allocBonus={"Bright Style"}
            goals={["Variable"]}
          />
          <p>
            An Intuition reaction is provoked by things that manipulate you through incomplete knowledge, such as
            deception, hidden motives, memory loss, or fast talk.
          </p>
          <p>
            If this was triggered by a Challenge someone else completed, the reaction has the same Goals as the
            Challenge that provoked it. Each point applied to them removes a point of Progress that was applied during
            during the triggering Challenge.
          </p>
          <p>
            Otherwise, the GM will assign Goals for this Reaction, often a just simple fixed Goal indicating if you are
            aware of something or not.
          </p>
        </Section>
        <Section header="Perception">
          <ChallengeParams
            pair={{ focus: true, far: true }}
            risk={"Medium"}
            effort={"Low"}
            allocBonus={"Alert Style"}
            goals={["Variable"]}
          />
          <p>
            An Perception reaction is provoked by things that anything that attempts to avoid your senses, such as
            stealth or hidden details.
          </p>
          <p>
            If this was triggered by a Challenge someone else completed, the reaction has the same Goals as the
            Challenge that provoked it. Each point applied to them removes a point of Progress that was applied during
            during the triggering Challenge.
          </p>
          <p>
            Otherwise, the GM will assign Goals for this Reaction, often a just simple fixed Goal indicating if you are
            aware of something or not.
          </p>
        </Section>
        <Section header="Willpower">
          <ChallengeParams
            pair={{ focus: true, self: true }}
            risk={"Medium"}
            effort={"Low"}
            allocBonus={"Confident Style"}
            goals={["Variable"]}
          />
          <p>
            A Willpower reaction is provoked by things that anything that manipulates your emotions or instincts, such
            as fear, exhaustion, or temptation.
          </p>
          <p>
            If this was triggered by a Challenge someone else completed, the reaction has the same Goals as the
            Challenge that provoked it. Each point applied to them removes a point of Progress that was applied during
            during the triggering Challenge.
          </p>
          <p>
            Otherwise, the GM will assign Goals for this Reaction, often a just simple fixed Goal indicating if you
            resist something or not.
          </p>
        </Section>
      </Section>

      <Section header="Hidden Space Actions" isClassified>
        <p>
          The following actions and reaction can only be taken if you are in Hidden Space, or when triggered by
          something in Hidden Space.
        </p>
        <Section header="Hidden Attack">
          <ChallengeParams
            pair={{ variable: true }}
            risk={"Medium"}
            effort={"Medium"}
            allocBonus={"Sublimation Style"}
            goals={["Threat", "Floating", "Sinking"]}
          />
          <p>
            You grapple with another's hidden body, interfering with its workings, attempting to sever it from its
            hidden counterpart, or forcing it to a different depth.
          </p>
          <p>
            This attack can only be used while you are on depth layer 1 of hidden space. It can target anyone on this
            layer or in physical space.
          </p>
          <p>
            The hidden Metabolism used in the pairing is Self if the target is adjacent to you, Near if they are not
            adjacent to you but within a number of meters equal to your Near score, and Far if they are within a range
            equal to the sum of your Near and Far scores. Outside this range, this attack cannot be used. If you have
            the Sublimed state, you can use Focus for the Physical Metabolism, otherwise no Physical Metabolism used.
          </p>
          <p>The amount of Progress applied to the Threat Goal is dealt to the target as Threat.</p>
          <p>
            The target gains the Floating or Sinking state with an intensity equal to the Progress applied to Floating
            or Sinking Goals. Progress may only be applied to one of these goals, not both. The amount of Progress you
            apply to this Goal cannot exceed your rank in the Sublimation Style.
          </p>
          <p>This attack provokes a Hidden Defense reaction.</p>
        </Section>
        <Section header="Hidden Defense">
          <ChallengeParams
            pair={{ variable: true }}
            risk={"Low"}
            effort={"Medium"}
            allocBonus={"Sublimation Style"}
            goals={["Defense"]}
          />
          <p>You will your hidden body to maintain its integrity against an onslaught.</p>
          <p>
            The Hidden Metabolism used for this reaction is the same as the one used by the attack that triggered it. If
            you have the Sublimed state, you can use Focus for the Physical Metabolism, otherwise no Physical Metabolism
            used.
          </p>
          <p>
            Each point applied to Defense removes a removes a point of Threat, or a point from your choice of any other
            Goal, inflicted by the triggering attack.
          </p>
        </Section>
        <Section header="Manifest">
          <p>
            You shift your form closer to physical space, attempting to influence it by shifting a portion of your
            energies into it.
          </p>
          <p>You can only use this action while you are on depth layer 1 of hidden space.</p>
          <p>
            If you are in or adjacent to a willing person's space, you may donate any number of points from a single
            Hidden Metabolism to this person. You spend these points and then your target immediately gains them. The
            points they gain can exceed their capacity, however if they still exceed the capacity at the end of their
            next turn they are lost.
          </p>
          <p>
            If you are not close enough to anyone you want to give Metabolism points to, you may instead manifest a
            minor haunting-like physical effect. The limits of these effects are up to the GM, but they are all minor
            and ghostly, they cannot deal damage or move meaningful weight. The effects could be atmospheric, sensory,
            or interference oriented. Atmospheric effects may include a rapid localized drop in temperature, sudden air
            currents, or a frightening vertigo inducing infrasound or pressure change. Sensory effects may include a
            strong scent of ozone, a faintly luminous humanoid visual haze, changes to light sources or shadows, or
            unintelligible whispering sounds. Interference effects may include localized dimming or flickering lights,
            static on screens, triggering the haptics in a device to cause a phantom notification, or ending any ongoing
            phone calls or wireless signals.
          </p>
        </Section>
      </Section>
    </Section>
  );
}

export default ChapterActions;
