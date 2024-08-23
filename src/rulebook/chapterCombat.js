import { useContext } from "react";
import { RulebookContext } from "../context/rulebookContext";
import Break from "../components/break/break";
import ChapterIntro from "../components/chapter-intro/chapter-intro";
import Section from "../components/section/section";
import Logomark from "../svgs/logomark";
import Crosslink from "../components/crosslink/crosslink";
import Metabolism from "../components/metabolism/metabolism";
import Pair from "../components/metabolism/pair";

function ChapterCombat() {
  const { topicMap } = useContext(RulebookContext);
  const linkMap = topicMap.current;

  return (
    <Section coordinates={"4"} header="Combat">
      <ChapterIntro>
        <p>
          In combat, the game slows down into turns to follow the action. Fights are difficult and lethal for normal
          people, but access to
          <Crosslink target={linkMap.HiddenMetabolisms}>Hidden Metabolisms</Crosslink> changes this. The primitive parts
          of the brain stem that mediate the connection to the Hidden body are the same as those that manage autonomic
          processes like breathing and heart rate. Once you've gotten the feel for this connection, stressful situations
          often take on a rhythm: inhale, allocate, exhale, execute. Having foudnd this rhythm, you can take two actions
          each time it's your turn.
        </p>
        <Logomark />
      </ChapterIntro>

      <Section header="Inhale Action" isChapterIntroColumn>
        <p>
          First, take an inhale action. This can be any action, but with one requirement, only people with at least one
          current point within the
          <Crosslink target={linkMap.HiddenMetabolisms}>Hidden Metabolism</Crosslink> available can take inhale actions.
        </p>
      </Section>
      <Section header="Exhale Action" isChapterIntroColumn isClassified>
        <p>
          Second, take an exhale action. The exhale action can be any action. This is the only action normal people have
          access to, so once you can reliably use the inhale action too you can act twice as often as most people.
        </p>
      </Section>

      <Section header="Combat Flow">
        <p>
          The first step of combat is determining who has the initiative. Everyone involved must make a
          <Crosslink target={linkMap.Challenges}>Challenge</Crosslink> with default Risk and Effort that requires
          <Metabolism focus />. Turns start from the highest result on this Challenge and continue to the lowest result.
        </p>
        <p>
          Determining initiative is the moment adrenaline kicks your body into high gear. Until combat ends you are
          pushing yourself to your limits, which has a few effects.
        </p>
        <ul>
          <li>
            Your <Crosslink target={linkMap.Gameplay}>Metabolisms</Crosslink> regenerate more quickly. Refill half of
            their current values, rounding up to whole numbers, at the end of each round.
          </li>
          <li>
            There are a list of named actions in the next chapter, such as Melee Attack, Aim, or Move. Due to the speed
            and chaos of combat, you can only take actions from this list.
          </li>
        </ul>
        <Section header="Rounds & Turns">
          <p>
            In initiative order, everyone takes their turn doing an
            <Crosslink target={linkMap.InhaleAction}>inhale action</Crosslink> and an
            <Crosslink target={linkMap.ExhaleAction}>exhale action</Crosslink>. At the end of each round after everyone
            has taken a turn, regain half of your used
            <Crosslink target={linkMap.Gameplay}>Metabolism</Crosslink> points. Always round up to a whole number.
          </p>
        </Section>
        <Section header="Taking Actions & Reactions" topicKey="TakingActionsAndReactions">
          <p>
            Normal actions, such as <Crosslink target={linkMap.Attacks}>attacking</Crosslink>, consume one of either
            your
            <Crosslink target={linkMap.InhaleAction}>inhale</Crosslink> or
            <Crosslink target={linkMap.ExhaleAction}>exhale action</Crosslink>. Occaisonally, there are full actions,
            such as inducing most
            <Crosslink target={linkMap.UsingCascadeEvents}>cascade events</Crosslink>, that consume both your inhale and
            exhale actions. There can also be non-actions, that consume no action or time but still must be done on your
            turn.
          </p>
          <p>
            Additionally, outside of your turns you may take reactions to the actions of others. For example, attempting
            to dodge an enemy's attack.
          </p>
          <Section header="Action Bonuses">
            <p>
              You have an Action Bonus associated with every action and reaction you can take in combat. If the action
              involves a Challenge, add this number to any Progress you get on the Challenge.
            </p>
          </Section>
        </Section>
        <Section header="Movement">
          <p>
            You can move 1 meter for free either before or after you take your inhale action and then again when you
            take you exhale action. This means you always have 2 meters of movement you can take on your turn. If you
            wish to move further, you can use the Move action as one or both of your actions.
          </p>
          <p>
            Additionally, you can move 1 meter after you take a reaction that was caused by being attacked, but not
            after a reaction caused by something else.
          </p>
          <Section header="Grids">
            <p>
              For clarity, all distances are referred to in meters. A grid map of one meter squares or hexes can be
              helpful to visualize chaotic situations, but it is not strictly necessary.
            </p>
            <p>
              Consider using square grids for indoor or urban environments. Consider using hex grids for outdoor, open,
              or organic environments.
            </p>
            <p>Consider just using your imagination for simple combats.</p>
          </Section>
        </Section>
        <Section header="Attacks">
          <p>
            Attack by taking the Unarmed, Melee, or Ranged Attack action. These actions are all a Default Risk and
            Effort Challenge that always requires <Metabolism fight />. The attack used determines which
            <Crosslink target={linkMap.HiddenMetabolisms}>Hidden Metabolism</Crosslink> is required; <Metabolism self />{" "}
            for unarmed strikes,
            <Metabolism near /> for melee attacks, and <Metabolism far /> for ranged attacks.
          </p>
          <p>
            Attack Challenges do not have a Difficulty. Instead, each point of
            <Crosslink target={linkMap.CountingProgress}>Progress</Crosslink> that you get on an attack inflicts a point
            of
            <Crosslink target={linkMap.Attacks}>Threat</Crosslink> to the target. If you have a weapon equiped, the
            weapon's Size value is also added to the Threat dealt.
          </p>
          <p>
            You can only take an Attack action if you apply at least 1 Metabolism point to it. If you are using a
            weapon, you can only take an Attack action if you apply at least a number of metabolism point equal to the
            weapon's size.
          </p>
          <Section header="Attacking Example" isInset>
            <p>
              For your <Crosslink target={linkMap.InhaleAction}>inhale action</Crosslink> you spend 3 of 3
              <Metabolism far /> and 1 of 4
              <Metabolism fight /> to fire a size 2 ranged weapon. This buys you 4
              <Crosslink target={linkMap.RollingDice}>dice</Crosslink>. The results are 2, 4, 4, and 5, meaning 3 points
              of Progress and therefore 3 points of <Crosslink target={linkMap.Attacks}>Threat</Crosslink>. Add your
              weapon's size of 2 to the Threat dealt, resulting in 5 total Threat.
            </p>
            <p>
              For your <Crosslink target={linkMap.ExhaleAction}>exhale action</Crosslink> you spend the remaining 3 of 4
              <Metabolism fight /> and 2 of 2
              <Metabolism self /> to kick an adjacent enemy. Your 5{" "}
              <Crosslink target={linkMap.RollingDice}>dice</Crosslink>
              come up 1, 1, 3, 4, and 5, creating 2<Crosslink target={linkMap.Attacks}>Threat</Crosslink>. Since no
              weapon was used, there is no additional Threat.
            </p>
          </Section>
        </Section>
        <Section header="Reactions">
          <p>
            When attacked, you can react outside of your turn to reduce the
            <Crosslink target={linkMap.Attacks}>Threat</Crosslink> you take. To do so, make a
            <Crosslink target={linkMap.Challenges}>Challenge</Crosslink> that is Default Effort, but Low Risk. This
            Challenge requires the pairing of
            <Metabolism flight /> and the same
            <Crosslink target={linkMap.HiddenMetabolisms}>Hidden Metabolism</Crosslink> used by the attack. Reaction
            Challenges do not have a Difficulty, instead each point of
            <Crosslink target={linkMap.CountingProgress}>Progress</Crosslink> lowers the
            <Crosslink target={linkMap.Attacks}>Threat</Crosslink> taken by one. Any remaining
            <Crosslink target={linkMap.Attacks}>Threat</Crosslink> becomes
            <Crosslink target={linkMap.Stress}>Stress</Crosslink> that you must distribute up between the
            <Crosslink target={linkMap.Gameplay}>Metabolisms</Crosslink> you used in the reaction.
          </p>
          <p>
            Because reactions often use <Metabolism flight />, your current <Metabolism flight /> is a good indicator of
            how much
            <Crosslink target={linkMap.Attacks}>Threat</Crosslink> you can handle this round, and your maximum
            <Metabolism flight /> is a good indicator of how much <Crosslink target={linkMap.Stress}>Stress</Crosslink>
            you can take in combat before being <Crosslink target={linkMap.InjuryStates}>injured</Crosslink>.
          </p>
          <Section header="Reactions Example" isInset>
            <p>
              You were <Crosslink target={linkMap.Attacks}>attacked</Crosslink> with a melee weapon for 5
              <Crosslink target={linkMap.Attacks}>Threat</Crosslink>. You must
              <Crosslink target={linkMap.Reactions}>react</Crosslink> with your
              <Pair flight near /> <Crosslink target={linkMap.Stress}>pairing</Crosslink>.
            </p>
            <p>
              You spend 2 out of 3 <Metabolism flight /> and 1 out of 1 <Metabolism near />, a total of 3 points.
            </p>
            <p>
              This reduces the <Crosslink target={linkMap.Attacks}>Threat</Crosslink> dealt by 3, but there is still 2
              points of Threat remaining, so you take 2<Crosslink target={linkMap.Stress}>Stress</Crosslink>. You decide
              to put all of it in
              <Metabolism flight /> to avoid reducing <Metabolism near /> to 0.
            </p>
            <p>
              Due to this Stress you now have 1 out of 1 <Metabolism flight /> and 0 out of 1 <Metabolism near />
              available.
            </p>
            <p>
              Another attack does 2 <Crosslink target={linkMap.Attacks}>Threat</Crosslink>, you spend your last point of
              <Metabolism flight /> to reduce the Threat to 1. You now must decide 1 Stress is dealt to
              <Metabolism flight /> reducing the max to 0 and injuring you or if it is dealt to <Metabolism near />
              reducing the max to 0 and dissociating you.
            </p>
          </Section>
        </Section>
        <Section header="Risk and Effort in Combat">
          <p>
            Using advantage in combat to improve the Risk or Effort of your actions will greatly improve your odds of
            survival. You can get advantage, or disadvantage, from the situation in combat. For example, if you unseen
            by the enemy or the enemy is restrained in someway, you will have advantage when you attack them. Outside of
            combat you can often apply a Trait in order to get advantage, however Traits you have from character
            creation are not typically relevant in combat. As you spend experience you may acquire specific combat
            Traits that state precisely when they are relevant. You can only apply a Trait one time per round, even if
            you have multiple Traits that become relevant during the round.
          </p>
        </Section>
        <Section header="Acting on Empty">
          <p>
            You may find find you are don't want attack with one or both of you actions on a turn because you do not
            have enough
            <Crosslink target={linkMap.AdvantageAndDisadvantage}>Metabolism</Crosslink> points or want to save them for
            later. When this happens you still have options. For example, every basic action can provide some benefit
            that doesn't require a Challenge or spending metabolism points.
          </p>
          <p>
            If you still wish to attack when you have 0 points in your Metabolism pairing, or fewer points than the size
            of the weapon you wish to use, you still have the option to make a desperate attack. However, doing this
            requires both your inhale and exhale actions and increases the Risk level of the attack. Resolve this attack
            as if you applied 1 metabolism point to it and your weapon's size value adds dice to the Challenge instead
            of adding Threat.
          </p>
        </Section>
        <Section header="Ending Combat">
          <p>
            Combat ends when all aggressors of one side are either injured, dissociated, or unconscious. At this point
            regain all of your spent metabolism points and you may resume acting normally.
          </p>
        </Section>
      </Section>

      <Section header="Combat Situations">
        <p>
          A wide variety of complex situations can arise in combat. Scenarios that are part of common tactics and are
          described here. For every other unexpected situation, the GM will decide how to resolve it.
        </p>
        <Section header="Ambush">
          <p>
            Any combatants are not aware of their enemies when initiative is determined are considered to be surprised.
            When a surprised combatant takes their turn during the first round of combat, they cannot take an exhale
            action. If they don't have access to an inhale action, like most unentangled humans, then they are unabled
            to take any actions during this turn.
          </p>
        </Section>
        <Section header="Cover">
          <p>
            Any obstacle that can get between two combatants can be used as cover. Cover is assigned a numerical value
            based on how well it protects you from the current attacker. This number is determined based on the line of
            sight of the current attacker, a different attacker who's line of sight is not blocked by the cover may have
            no cover or a lower cover value. Cover that only blocks a small portion of your body has a value of 1,
            blocking half of your body has a value of 3, and cover that blocks your entire body has a value of 6.
          </p>
          <p>
            When you are attacked, the incoming Threat is reduced by the value of the cover. If the value of the cover
            is 6 or greater, line of sight to you is blocked and you cannot be the target of an attack action or any
            other action that requires seeing you.
          </p>
          <p>
            If you are not currently in cover when you use a reaction against an attack, but you use the free movement
            provided by the reaction to move into cover, then you can resolve the reaction with the benefit of the
            cover. You can use the Hide action to duck behind the cover to increase the value.
          </p>
        </Section>
        <Section header="Stealth">
          <p>
            Any time you you attack an enemy that does not know your location, you have advantage on the attack. Taking
            this attack reveals your location to the target, and to everyone if it makes any noise.
          </p>
          <p>
            If you are in or next to cover, you can use the Hide action to attempt to make enemies lose track of your
            location.
          </p>
        </Section>
      </Section>

      <Section header="Equipment">
        <Section header="Armor">
          <p>
            All armor has a Defense value. Each point of Defense on worn armor reduces
            <Crosslink target={linkMap.Attacks}>Threat</Crosslink> by 1 on all incoming
            <Crosslink target={linkMap.Attacks}>attacks</Crosslink>. Armor with Defense 1 can be concealed under or worn
            as casual clothing. Armor with Defense 3 is heavy and slows you down, reactions do not provide free movement
            while you are wearing it.
          </p>
          <Section header="Types of Armor">
            <table>
              <thead>
                <tr>
                  <td>Defense</td>
                  <td>Examples</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Kevlar, leather</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Light tactical armor, riot gear</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Heavy infantry armor with trauma plates</td>
                </tr>
              </tbody>
            </table>
          </Section>
        </Section>
        <Section header="Weapons">
          <p>
            What you choose to attack with determines what <Crosslink target={linkMap.Gameplay}>metabolisms</Crosslink>
            are used to attack and defend. In general all attacks require
            <Metabolism fight />, and all reactions require <Metabolism flight />, unarmed combat uses
            <Metabolism self />, melee weapons use
            <Metabolism near />, and ranged weapons use <Metabolism far />.
          </p>
          <p>
            Each weapon has a Size value. This number indicates the amount of extra
            <Crosslink target={linkMap.Attacks}>Threat</Crosslink> added to attacks. It also indicates the minimum
            amount of Metabolism points that must be spent to attack with the weapon, if you do not have this amount
            available, you can only use this weapon with a desperate attack. Size 1 can be concealed in casual clothing,
            Size 2 cannot, and Size 3 or above requires both hands. Any weapon Size 4 or above requires a
            <Crosslink target={linkMap.TakingActionsAndReactions}>full action</Crosslink> to use and causes any
            reactions to it to become Default Risk instead of Low.
          </p>
          <Section header="Types of Weapons">
            <p>Other than unarmed, each category of weapons has a special property common to all similar weapons.</p>
            <h5>Unarmed</h5>
            <table>
              <thead>
                <tr>
                  <td>Size</td>
                  <td>Examples</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>Punch, kick, elbow, etc.</td>
                </tr>
              </tbody>
            </table>
            <h5>Blunt</h5>
            <p>
              When attackign with blunt weapons the defender uses the normal reaction, but the attacker can choose deal
              any unblocked Stress as if the reaction's metabolism pair used <Metabolism focus />
              instead of <Metabolism flight />.
            </p>
            <table>
              <thead>
                <tr>
                  <td>Size</td>
                  <td>Examples</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Night stick</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Small hammer, pool cue</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Baseball bat</td>
                </tr>
                <tr>
                  <td>4*</td>
                  <td>Sledge hammer</td>
                </tr>
              </tbody>
            </table>
            <h5>Blades</h5>
            <p>
              All blades deal 1 extra <Crosslink target={linkMap.Attacks}>Threat</Crosslink> above what their Size
              normally would.
            </p>
            <table>
              <thead>
                <tr>
                  <td>Size</td>
                  <td>Examples</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Kitchen knife, hunting knife, box cutter</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Machete, hand axe, mall ninja gear</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Fire axe, katana</td>
                </tr>
                <tr>
                  <td>4*</td>
                  <td>Great sword</td>
                </tr>
              </tbody>
            </table>
            <h5>Ranged</h5>
            <p>Ranged weapons can target anything within your line of sight.</p>
            <table>
              <thead>
                <tr>
                  <td>Size</td>
                  <td>Examples</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>9mm handgun</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Heavy magnum revolver, small SMG</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Rifle, shotgun</td>
                </tr>
                <tr>
                  <td>4*</td>
                  <td>Assault rifle</td>
                </tr>
                <tr>
                  <td>5*</td>
                  <td>Machine gun</td>
                </tr>
              </tbody>
            </table>
          </Section>
        </Section>
      </Section>
      <Break page />
    </Section>
  );
}

export default ChapterCombat;
