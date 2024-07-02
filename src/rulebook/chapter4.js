import Break from "../components/break/break";
import ChapterIntro from "../components/chapter-intro/chapter-intro";
import Section from "../components/section/section";
import Logomark from "../svgs/logomark";
import Crosslink from "../components/crosslink/crosslink";
import { topics } from "../context/rulebookContext";
import Metabolism from "../components/metabolism/metabolism";
import Pair from "../components/metabolism/pair";

function Chapter4() {
  return (
    <Section coordinates={"4"} header="Combat">
      <ChapterIntro>
        <p>
          In combat, the game slows down into turns to follow the action. Fights are difficult and lethal for normal
          people, but access to
          <Crosslink target={topics.HIDDEN_METAB}>Hidden Metabolisms</Crosslink> changes this. The primitive parts of
          the brain stem that mediate the connection to the Hidden body are the same as those that manage autonomic
          processes like breathing and heart rate. Once you've gotten the feel for this connection, stressful situations
          often take on a rhythm: Inhale, allocate, Exhale, execute. Because of this rhythm, you have two actions each
          time it's your turn.
        </p>
        <Logomark />
      </ChapterIntro>

      <Section header="Inhale Action" isChapterIntroColumn>
        <p>
          First, take an inhale action. This can be any normal action, but with one requirement, only people with
          <Crosslink target={topics.HIDDEN_METAB}>Hidden Metabolisms</Crosslink> can take inhale actions.
        </p>
      </Section>
      <Section header="Exhale Action" isChapterIntroColumn isClassified>
        <p>
          Second, take an exhale action. The exhale action can be any normal action. This is the only action normal
          people have access to, so once you can reliably use the inhale action too you can act twice as often as most
          people.
        </p>
      </Section>
      <Section header="Full Action" isChapterIntroColumn>
        <p>
          Occasionally, some actions demand enough from you that they consume both of your actions. Things like a full
          sprint or swinging an oversized weapon are full actions.
        </p>
      </Section>

      <Section header="Combat Flow">
        <p>
          The first step of combat is determining who has the initiative. Everyone involved must make a
          <Crosslink target={topics.RISKY}>Risky</Crosslink> and{" "}
          <Crosslink target={topics.STRENUOUS}>Strenuous</Crosslink>
          <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink> that requires <Metabolism focus />. Turns start
          from the highest result and continue to the lowest result.
        </p>
        <p>
          Determining initiative is the moment adrenaline kicks your body into high gear, causing your
          <Crosslink target={topics.METABOLISM}>Metabolisms</Crosslink> to start regenerating more quickly. Until the
          end of combat, things are moving too fast to <Crosslink target={topics.TAKE_TIME}>Take Time</Crosslink> and
          you can't
          <Crosslink target={topics.PUSH_YRSELF}>Push Yourself</Crosslink> because you're already acting at your limits.
          Almost every action in combat involves a <Crosslink target={topics.STRENUOUS}>Strenuous</Crosslink>
          <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink>, so you will be spending
          <Crosslink target={topics.METABOLISM}>Metabolism</Crosslink> points every turn you do something.
        </p>
        <Section header="Rounds & Turns">
          <p>
            In initiative order, everyone takes their turn doing an{" "}
            <Crosslink target={topics.INHALE_ACTION}>inhale action</Crosslink> and an
            <Crosslink target={topics.EXHALE_ACTION}>exhale action</Crosslink> or taking a single
            <Crosslink target={topics.FULL_ACTION}>full action</Crosslink>. At the end of each round after everyone has
            taken a turn, regain half of all of your used <Crosslink target={topics.METABOLISM}>Metabolism</Crosslink>{" "}
            points. Always round up to a whole number.
          </p>
        </Section>
        <Section header="Actions & Reactions">
          <p>
            Normal actions, such as <Crosslink target={topics.ATTACK}>attacking</Crosslink>, consume one of either your
            <Crosslink target={topics.INHALE_ACTION}>inhale</Crosslink> or{" "}
            <Crosslink target={topics.EXHALE_ACTION}>exhale action</Crosslink>. A
            <Crosslink target={topics.FULL_ACTION}>full action</Crosslink>, such as most
            <Crosslink target={topics.CASCADE_EVENT}>cascade events</Crosslink>, consumes both. Whenever you take a
            normal or
            <Crosslink target={topics.FULL_ACTION}>full action</Crosslink>, you can move one meter for free either
            before or after the action.
          </p>
          <p>
            Additionally, outside of your turns you may take reactions to the actions of others, such as attempting to
            dodge an attack. Similarly to actions, you can move one meter for free after you take a reaction.
          </p>
        </Section>
        <Section header="Attacks">
          <p>
            Attacking someone is a <Crosslink target={topics.RISKY}>Risky</Crosslink> and{" "}
            <Crosslink target={topics.STRENUOUS}>Strenuous</Crosslink>
            <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink> that always requires <Metabolism fight />. The
            attack used determines which
            <Crosslink target={topics.HIDDEN_METAB}>Hidden Metabolism</Crosslink> is required; <Metabolism self /> for
            unarmed strikes,
            <Metabolism near /> for melee attacks, and <Metabolism far /> for ranged attacks.
          </p>
          <p>
            Each point of <Crosslink target={topics.PROGRESS}>Progress</Crosslink> that you get on an attack's
            <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink> inflicts a point of{" "}
            <Crosslink target={topics.THREAT}>Threat</Crosslink> to the target.
          </p>
          <Section header="Attacking Example" isInset>
            <p>
              For your <Crosslink target={topics.INHALE_ACTION}>inhale action</Crosslink> you spend 3/3{" "}
              <Metabolism far /> and 1/4
              <Metabolism fight /> to fire a ranged weapon. Your 4 <Crosslink target={topics.DICE}>dice</Crosslink>{" "}
              create a total of 3<Crosslink target={topics.THREAT}>Threat</Crosslink>.
            </p>
            <p>
              For your <Crosslink target={topics.EXHALE_ACTION}>exhale action</Crosslink> you spend the rest of your{" "}
              <Metabolism fight /> and 2/2
              <Metabolism self /> to kick an adjacent enemy. Your 5 <Crosslink target={topics.DICE}>dice</Crosslink>{" "}
              create 2<Crosslink target={topics.THREAT}>Threat</Crosslink>.
            </p>
          </Section>
        </Section>
        <Section header="Reactions">
          <p>
            When attacked, you can react outside of your turn to reduce the{" "}
            <Crosslink target={topics.THREAT}>Threat</Crosslink> you take. To do so, do a
            <Crosslink target={topics.STRENUOUS}>Strenuous</Crosslink>, but not
            <Crosslink target={topics.RISKY}>Risky</Crosslink>,
            <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink> that requires the pairing of
            <Metabolism flight /> and the same
            <Crosslink target={topics.HIDDEN_METAB}>Hidden Metabolism</Crosslink> used by the attack. Each point of
            <Crosslink target={topics.PROGRESS}>Progress</Crosslink> lowers the
            <Crosslink target={topics.THREAT}>Threat</Crosslink> by one. Any remaining{" "}
            <Crosslink target={topics.THREAT}>Threat</Crosslink> becomes
            <Crosslink target={topics.STRESS}>Stress</Crosslink> that you must split up between the involved
            <Crosslink target={topics.METABOLISM}>Metabolisms</Crosslink>. You decide how to distribute this
            <Crosslink target={topics.STRESS}>Stress</Crosslink>, perhaps putting all on one
            <Crosslink target={topics.METABOLISM}>Metabolism</Crosslink> or splitting it between both.
          </p>
          <p>
            Because reactions often use <Metabolism flight />, your current <Metabolism flight /> is a good indicator of
            how much
            <Crosslink target={topics.THREAT}>Threat</Crosslink> you can handle this round, and your maximum
            <Metabolism flight /> is a good indicator of how much <Crosslink target={topics.STRESS}>Stress</Crosslink>{" "}
            you can take in combat before an <Crosslink target={topics.INJURY}>injury</Crosslink> takes you out of the
            fight.
          </p>
        </Section>
        <Section header="Challenge Modifications in Combat">
          <p>
            <Crosslink target={topics.PAIRING}>Metabolism pairings</Crosslink> and{" "}
            <Crosslink target={topics.COMPLICATION}>Complications</Crosslink>
            are more strict in combat than outside of it. The pairings of most combat{" "}
            <Crosslink target={topics.ACTION}>actions</Crosslink> are required instead of being chosen. Also, because of
            the urgency and exertion of combat,
            <Crosslink target={topics.TAKE_TIME}>Taking Time</Crosslink>
            or <Crosslink target={topics.PUSH_YRSELF}>Pushing Yourself</Crosslink> are both impossible.
          </p>
          <p>
            The two remaining ways of modifying a <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink>,
            <Crosslink target={topics.TRAITS}>Applying a Trait</Crosslink> or{" "}
            <Crosslink target={topics.ADVANTAGE}>Finding an Advantage</Crosslink>, are possible in combat, however they
            are limited due to the speed and chaos of the situation. Each of these two methods can only be applied a
            single time per round. Due to the rapid chaos of combat, normal{" "}
            <Crosslink target={topics.TRAITS}>Traits</Crosslink> taken at character creation are typically not relevant
            when <Crosslink target={topics.ATTACK}>attacking</Crosslink> or
            <Crosslink target={topics.REACTION}>reacting</Crosslink>, however some{" "}
            <Crosslink target={topics.ENTANGLEMENTS}>Entanglements</Crosslink>
            provide <Crosslink target={topics.TRAITS}>Traits</Crosslink> that are consistently relevant in combat.
          </p>
          <p>
            One consistent way to <Crosslink target={topics.ADVANTAGE}>Find an Advantage</Crosslink> in combat is using
            stealth to target distracted or unaware foes.
          </p>
        </Section>
        <Section header="Acting on Empty">
          <p>
            You may find find you don't want to use one of your actions on a turn because you do not have enough
            <Crosslink target={topics.ADVANTAGE}>Metabolism</Crosslink> points or want to save them for later. When this
            happens you still have options, you can make a Desperate Attack, Aim, or Rest.
          </p>
          <Section header="Desperate Attack">
            <p>
              Like any other <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink>, when the
              <Crosslink target={topics.METABOLISM}>Metabolism</Crosslink> pairing needed for your attack is empty, you
              can still roll 1<Crosslink target={topics.DICE}>die</Crosslink> to attmept it. When this is done as an
              attack, it is known as a Desperate Attack and it requires a{" "}
              <Crosslink target={topics.CHALLENGE}>Full Action</Crosslink>.
            </p>
          </Section>
          <Section header="Aim">
            <p>
              You use your <Crosslink target={topics.INHALE_ACTION}>Inhale Action</Crosslink> to line up your next
              attack. If you then use your
              <Crosslink target={topics.EXHALE_ACTION}>Exhale Action</Crosslink> this turn to attack, it deals 1 extra
              <Crosslink target={topics.THREAT}>Threat</Crosslink>.
            </p>
          </Section>
          <Section header="Rest">
            <p>
              You take a second to catch your breath and immediately recover 1{" "}
              <Crosslink target={topics.METABOLISM}>Metabolism</Crosslink> point of your choice.
            </p>
          </Section>
        </Section>
      </Section>

      <Section header="Injury">
        {/* @todo does this belong in chapter 3? */}
        <p>
          If any <Crosslink target={topics.METABOLISM}>metabolism</Crosslink> has its maximum reduced to zero, you are
          injured. If
          <Metabolism fight /> is injured, you cannot attack. If
          <Metabolism flight /> is injured, you cannot take an action to move. If <Metabolism focus /> is injured, you
          are unconscious. You cannot attempt a <Crosslink target={topics.STRESSFUL}>Stressful</Crosslink>
          <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink> or{" "}
          <Crosslink target={topics.PUSH_YRSELF}>Push Yourself</Crosslink> if an injured Metabolism is part of the
          pairing.
        </p>
        <p>
          If you take further <Crosslink target={topics.STRESS}>Stress</Crosslink> on an injured
          <Crosslink target={topics.METABOLISM}>Metabolism</Crosslink> its maximum can be reduced below 0. If the
          maximum ever reaches the negative of the metabolism's value, then your character dies.
        </p>
        <p>
          Injured targets have a difficult time defending themselves. Anyone attacking an injured target may choose
          which
          <Crosslink target={topics.PHYS_METAB}>Physical Metabolism</Crosslink> is dealt the{" "}
          <Crosslink target={topics.THREAT}>Threat</Crosslink> of the attack. For example, if you want to knock an
          injured target unconsious you can target their <Metabolism focus />.
        </p>
        <Section header="Dissociation">
          <p>
            Similar to <Crosslink target={topics.PHYS_METAB}>Physical Metabolisms</Crosslink>, if a
            <Crosslink target={topics.HIDDEN_METAB}>Hidden</Crosslink> one has its maximum reduced to 0, it sustains
            something similar to an
            <Crosslink target={topics.INJURY}>injury</Crosslink>
            called Dissociation.
          </p>
          <p>
            Dissociation causes the brain to come out of sync or lose contact with resources it normally has available,
            causing strange and dangerous mental effects. If <Metabolism self /> dissociates, the body seems separate
            and unreal, as if it were a machine you are awkwardly piloting. If <Metabolism near /> dissociates, your
            surroundings seem distant and unreal as if you are passing right through them. If
            <Metabolism far />
            dissociates, you can no longer recognize identities and everyone feels like an enemy.
          </p>
          <p>
            Unlike <Crosslink target={topics.PHYS_METAB}>Physical Metabolisms</Crosslink>, having a
            <Crosslink target={topics.HIDDEN_METAB}>Hidden Metabolism</Crosslink>’s maximum reduced to the negative of
            its value isn't necessarily lethal, but it may often cause partial or total unconsciousness. Whatever form
            this takes, it always prevents you from acting meaningfully in combat due to terrifying and bizarre mental
            consequences. If this happens your fate is now at the mercy of the
            <Crosslink target={topics.GAMEMASTER}>GM</Crosslink> until you are healed.
          </p>
        </Section>
        <Section header="Reactions & Injury Example" isInset>
          <p>
            You were <Crosslink target={topics.ATTACK}>attacked</Crosslink> with a melee weapon for 5
            <Crosslink target={topics.THREAT}>Threat</Crosslink>. You must{" "}
            <Crosslink target={topics.REACTION}>react</Crosslink> with your
            <Pair flight near /> <Crosslink target={topics.STRESS}>pairing</Crosslink>.
          </p>
          <p>
            You spend 2/3 <Metabolism flight /> and 1/1 <Metabolism near />, a total of 3 points.
          </p>
          <p>
            This reduces the <Crosslink target={topics.THREAT}>Threat</Crosslink> from 5 to 2, so you take 2
            <Crosslink target={topics.STRESS}>Stress</Crosslink>. You decide to put all of it in
            <Metabolism flight /> to avoid <Crosslink target={topics.DISSOCIATION}>Dissociation</Crosslink>.
          </p>
          <p>
            Another attack does 2 <Crosslink target={topics.THREAT}>Threat</Crosslink>, you spend your last{" "}
            <Metabolism flight /> to reduce it to 1. You decide to take avoid injury by taking this Stress to{" "}
            <Metabolism near />, which brings its maximum to 0 and dissociates you.
          </p>
        </Section>
        <Section header="Ending Combat" isInset>
          <p>
            Combat ends when all aggressors of one side are either injured, dissociated, or unconscious. At this point
            regain all of your spent metabolism points and you may resume acting normally, including{" "}
            <Crosslink target={topics.PUSH_YRSELF}>Pushing Yourself</Crosslink> and
            <Crosslink target={topics.TAKE_TIME}>Taking Time</Crosslink> during
            <Crosslink target={topics.CHALLENGE}>Challenges</Crosslink>.
          </p>
        </Section>
      </Section>

      <Section header="Movement">
        <p>
          Any time you spend at least 1 <Crosslink target={topics.STRESS}>Metabolism</Crosslink> point on an
          <Crosslink target={topics.ACTION}>action</Crosslink> or{" "}
          <Crosslink target={topics.REACTION}>reaction</Crosslink> in combat, you get a meter of free movement. For
          actions, this movement can occur before or after the action, but for reactions it always occurs after the
          action and reaction are resolved.
        </p>
        <p>
          For any additional movement, you need to take a separate action. Spend any combination of points from all
          Metabolisms to move that number of meters plus one due to the free movement you get for taking an action.
        </p>
        <Section header="Grids">
          <p>
            For clarity, all distances are referred to in meters. A grid map of one meter squares or hexes can be
            helpful to visualize chaotic situations, but it is not strictly necessary.
          </p>
          <p>
            Consider using square grids for indoor or urban environments. Consider using hex grids for outdoor, open, or
            organic environments.
          </p>
          <p>Consider just using your imagination for simple combats.</p>
        </Section>
      </Section>

      <Section header="Equipment">
        <Section header="Armor">
          <p>
            All armor has a Defense value. Each point of Defense on worn armor reduces{" "}
            <Crosslink target={topics.THREAT}>Threat</Crosslink> by 1 on all incoming{" "}
            <Crosslink target={topics.ATTACK}>attacks</Crosslink>. Armor with Defense 1 can be concealed under or worn
            as casual clothing. Armor with Defense 3 reduces the maximum value of all metabolisms it protects by 1.
          </p>
          <Section header="Types of Armor">
            <p>
              Armor with Defense 1 can be concealed under or worn as casual clothing. Armor with Defense 3 reduces the
              maximum value of all metabolisms it protects by 1.
            </p>
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
            What you choose to attack with determines what <Crosslink target={topics.Metabolism}>metabolisms</Crosslink>{" "}
            are used to attack and defend. In general all attacks require
            <Metabolism fight />, and all reactions require <Metabolism flight />, unarmed combat uses{" "}
            <Metabolism self />, melee weapons use
            <Metabolism near />, and ranged weapons use <Metabolism far />.
          </p>
          <p>
            Each weapon has a Size value. This number indicates the amount of extra{" "}
            <Crosslink target={topics.THREAT}>Threat</Crosslink> added to attack roll results. It also indicates the
            minimum amount of Metabolism that must be spent to attack with the weapon. Size 1 can be concealed in casual
            clothing, Size 2 cannot, and Size 3 or above requires both hands. Any weapon above Size 3 requires a
            <Crosslink target={topics.FULL_ACTION}>full action</Crosslink> to use and deals an extra point of
            <Crosslink target={topics.STRESS}>Stress</Crosslink> that cannot be removed by a{" "}
            <Crosslink target={topics.REACTION}>reaction</Crosslink>.
          </p>
          <p>
            If it is your first turn in a round and your weapon requires more points to use than you have available in
            the required metabolism pairing, you can spend all of the points in that pairing to still use this weapon as
            a<Crosslink target={topics.FULL_ACTION}>Full Action</Crosslink>.
          </p>
          <Section header="Types of Weapons">
            <p>Each category of weapons has a special property common to all similar weapons.</p>
            <p>Unarmed</p>
            <p>
              Each category of weapons has a special property common to all similar weapons. Because unarmed strikes are
              typically weaker than weapons, the defender's reaction has the{" "}
              <Crosslink target={topics.CONTROLLED}>Controlled</Crosslink>
              <Crosslink target={topics.COMPLICATION}>complication</Crosslink>.
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
                  <td>0</td>
                  <td>Punch, kick, elbow, etc.</td>
                </tr>
              </tbody>
            </table>
            <p>Blunt</p>
            <p>
              When using blunt weapons the attacker can choose to force the target to react with <Metabolism focus />{" "}
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
            <p>Blades</p>
            <p>
              All blades deal 1 extra <Crosslink target={topics.THREAT}>Threat</Crosslink> above what their Size
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
            <p>Ranged</p>
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
                  <td>Light machine gun</td>
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

export default Chapter4;
