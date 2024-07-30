import Break from "../components/break/break";
import Section from "../components/section/section";
import ChapterIntro from "../components/chapter-intro/chapter-intro";
import EntanglementDescription from "../components/section/ent-desc";
import Crosslink from "../components/crosslink/crosslink";
import Pair from "../components/metabolism/pair";
import { topics } from "../context/rulebookContext";
import Metabolism from "../components/metabolism/metabolism";
import Logomark from "../svgs/logomark";

function Chapter6() {
  return (
    <Section coordinates={"6"} header="Entanglements">
      <ChapterIntro>
        <p>
          Each Entanglement contains several specializations sorted into two styles, one intuitive and one esoteric.
        </p>
        <Logomark />
      </ChapterIntro>

      <Section header="Intuitive Styles" isChapterIntroColumn>
        <p>
          Intuitive Styles represent archetypal approaches to problem solving and are named with adjectives that
          describe these approaches. They improve the existing capabilities of the body and mind.
        </p>
        <Section header="The 9 Intuitive Styles">
          <h4>Strong</h4>
          <p>
            The intuitive pairing of <Pair fight self />.
          </p>
          <p>Unarmed attacks, grappling, intimidation, and brute force.</p>
          <h4>Smooth</h4>
          <p>
            The intuitive pairing of <Pair fight near />.
          </p>
          <p>Melee attacks, stealth, charm, finesse, and manual dexterity</p>
          <h4>Sharp</h4>
          <p>
            The intuitive pairing of <Pair fight far />.
          </p>
          <p>Ranged attacks, precision, critical hits, and deception.</p>
          <h4>Tough</h4>
          <p>
            The intuitive pairing of <Pair flight self />.
          </p>
          <p> Unarmed defense, health, stamina, and regeneration.</p>
          <h4>Mobile</h4>
          <p>
            The intuitive pairing of <Pair flight near />.
          </p>
          <p>Melee defense, agility, traversal, and movement speed.</p>
          <h4>Quick</h4>
          <p>
            The intuitive pairing of <Pair flight far />.
          </p>
          <p>Ranged defense, wits, multitasking, tactics, and precognition.</p>
          <h4>Confident</h4>
          <p>
            The intuitive pairing of <Pair focus self />.
          </p>
          <p>Will, courage, and executive function.</p>
          <h4>Bright</h4>
          <p>
            The intuitive pairing of <Pair focus near />.
          </p>
          <p>Intelligence, learning, and creativity.</p>
          <h4>Alert</h4>
          <p>
            The intuitive pairing of <Pair focus far />.
          </p>
          <p>Awareness, empathy, and social predictions.</p>
        </Section>
      </Section>

      <Section header="Esoteric Styles" isChapterIntroColumn isClassified>
        <p>
          Esoteric Styles represent more unusual approaches to solving the same problems. They provide new abilities the
          body is normally incapable of. They often appear overtly supernatural when used.
        </p>
        <Section header="The 9 Esoteric Styles">
          <h4>Schizosomata</h4>
          <p>
            The esoteric pairing of <Pair fight self />.
          </p>
          <p>Radically transform one’s body or the way it is perceived.</p>

          <h4>Sublimation</h4>
          <p>
            The esoteric pairing of <Pair flight self />.
          </p>
          <p>Sublimation Traverse hidden space intangibly and invisibly</p>

          <h4>Abjuration</h4>
          <p>
            The esoteric pairing of <Pair focus self />.
          </p>
          <p>Abjuration Create durable barriers, wards, and filters, and alarms.</p>

          <h4>Electromagnetism</h4>
          <p>
            The esoteric pairing of <Pair fight near />.
          </p>
          <p>Control over the fundamental force of light or electricity.</p>

          <h4>Gravitonertia</h4>
          <p>
            The esoteric pairing of <Pair flight near />.
          </p>
          <p>Control over the fundamental force of mass and motion.</p>

          <h4>Chromodynamism</h4>
          <p>
            The esoteric pairing of <Pair focus near />.
          </p>
          <p>Control over the fundamental force that binds atoms.</p>

          <h4>Evocation</h4>
          <p>
            The esoteric pairing of <Pair fight far />.
          </p>
          <p>Evocation Create overtly explosive and destructive blasts.</p>
          <h4>Pneumaplegia</h4>
          <p>
            The esoteric pairing of <Pair flight far />.
          </p>
          <p>Make fields that manipulate motion and metabolisms.</p>
          <h4>Telethesia</h4>
          <p>
            The esoteric pairing of <Pair focus far />.
          </p>
          <p> Sense, communicate with, and manipulate other minds.</p>
        </Section>
      </Section>

      <Section header="Self Entanglements">
        <p>
          The Entanglements associated with the <Metabolism self /> Metabolism are grouped into the Intuitive Styles
          Strong, Tough, and Confident, and the Esoteric Styles Gravitonertia, Abjuration, or Schizosomata.
        </p>
        <p>
          These styles are concerned with unarmed combat and pushing the physical mind and body beyond its usual limits.
        </p>

        <Section header="Core Entanglement: Empower" isOpenAtDepth={4}>
          <EntanglementDescription
            ranks={[
              <>
                <p>
                  Increase your <Metabolism self /> Metabolism score by 1.
                </p>
                <p>
                  You can now buy Entanglements within the 6 styles associated with the <Metabolism self /> metabolism.
                </p>
                <p>
                  As a free action, you can spend 1 point of <Metabolism self /> at the start of your turn to enter the
                  Empowered state. This state lasts until the start of your next turn, and you cannot enter the state
                  again on that turn. While in this state you can spend 1
                  <Metabolism self />
                  to add an amount of <Crosslink target={topics.PROGRESS}>Progress</Crosslink> equal to your rank in
                  this Entanglement to any <Crosslink target={topics.ATTACK}>attack</Crosslink>
                  or <Crosslink target={topics.REACTION}>reaction</Crosslink>. Many Entanglements within the
                  <Metabolism self />
                  Styles grant additional ways to enter or use the Empowered state.
                </p>
              </>,
              <>
                <p>
                  Increase your <Metabolism self /> Metabolism score by 1.
                </p>
                <p>
                  When you sleep for several hours, remove all <Crosslink target={topics.STRESS}>Stress</Crosslink> from
                  each uninjured Physical Metabolism and remove enough Stress from each{" "}
                  <Crosslink target={topics.INJURY}>injured</Crosslink> Physical Metabolism to return its maximum to 0
                  and remove the injury.
                </p>
              </>,
              <>
                <p>
                  Increase your <Metabolism self /> Metabolism score by 1.
                </p>
                <p>
                  When you sleep for several hours, remove all <Crosslink target={topics.STRESS}>Stress</Crosslink>,
                  <Crosslink target={topics.INJURY}>injuries</Crosslink>, and{" "}
                  <Crosslink target={topics.DISSOCIATION}>dissociation</Crosslink>.
                </p>
              </>,
            ]}
          />
        </Section>
        <Section header="Intuitive Self Entanglements" isOpenAtDepth={4}>
          <Section header="Strong Style" isOpenAtDepth={4}>
            <p>
              The Strong Style contains the Entanglements Adrenal Strength, Empowered Grapple, Explosive Strength, Iron
              Grip, Lifting Capacity, and Unarmed Mastery.
            </p>
            <p>
              These Entanglements are focused on unarmed attacks, increased damage, grappling, and using the Empowered
              state for feats of incredible strength.
            </p>
            <Section header="Adrenal Strength">
              <EntanglementDescription
                intro={
                  <p>
                    Whether you call it focus, rage, or adrenaline, you can temporarily tap into reserves of acute
                    strength well beyond your normal limits.
                  </p>
                }
                ranks={[
                  <>
                    <p>While in the Empowered state, you can use the empowered actions Power Attack and Power Lift.</p>
                    <p>
                      Power Attack: Make a normal Melee or Unarmed attack. The reaction to this attack gains the
                      Stressful Complication.
                    </p>
                    <p>
                      Power Lift: Move an adjacent object that weighs up to double what you could normally move. If
                      another entanglement multiplies your lifting capacity, increase the multiplier once instead of
                      doubling it.
                    </p>
                  </>,
                  <p>
                    When using the Power Lift action, the maximum weight you can move is tripled instead of doubled. If
                    another entanglement multiplies your lifting capacity, increase the multiplier twice instead of
                    tripling it.
                  </p>,
                  <p>When you use the Power Attack action, the reaction to the attack gains the Risky Complication.</p>,
                ]}
              />
            </Section>
            <Section header="Explosive Strength">
              <EntanglementDescription
                intro={
                  <p>
                    By learning to deploy your increased strength instantly and with precise timing, you can greatly
                    increase the power behind explosive movements.
                  </p>
                }
                ranks={[
                  <>
                    <p>You may replace the Near component of armed melee attack rolls with Self.</p>
                    <p>The distance you can jump is doubled.</p>
                  </>,
                  <p>The distance you can jump is tripled.</p>,
                  <>
                    <p>All of your melee and unarmed damage rolls deal 1 more threat than they normally would.</p>
                    <p>The distance you can jump is quadrupled.</p>
                  </>,
                ]}
              />
            </Section>
            <Section header="Iron Grip">
              <EntanglementDescription
                intro={
                  <p>
                    This entanglement allows you to use weapons that would normally be too large to wield effectively.
                  </p>
                }
                ranks={[
                  <p>You can wield a weapon of size 3 in your main hand.</p>,
                  <p>You can wield weapons of size 3 in either hand. You cannot be disarmed against your will.</p>,
                  <p>
                    You can wield weapons of size 4 in either hand. If you are in the Empowered state, you can wield
                    weapons with a speed cost of up to your Self score in either hand.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Lifting Capacity">
              <EntanglementDescription
                intro={
                  <p>
                    This entanglement improves your ability to lift and move objects beyond what your strength would
                    normally allow. When mastered, it even extends your strength into the objects you lift, preventing
                    their own weight from crushing them.
                  </p>
                }
                ranks={[
                  <p>Increase your lifting capacity by 300 kg.</p>,
                  <p>Increase your lifting capacity by an additional 300 kg.</p>,
                  <p>
                    The amount you can lift is doubled. If another entanglement multiplies your lifting capacity,
                    increase the multiplier once instead of doubling it.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Unarmed Mastery">
              <EntanglementDescription
                intro={<p>Your empty hands have become powerful weapons.</p>}
                ranks={[
                  <p>
                    You gain the Trait Unarmed Mastery, this Trait is relevant any time you attempt to make an unarmed
                    attack.
                  </p>,
                  <p>
                    Your unarmed attacks count as blunt weapons, allowing you to choose to target Flight or Focus with
                    them. Your bare hands qualify for anything that requires you to be holding a weapon.
                  </p>,
                  <p>
                    You can add Focus as a third metabolism to the metabolism pairing used to make an unarmed attack.
                    You unarmed attacks count as size 1 weapons.
                  </p>,
                ]}
              />
            </Section>
          </Section>
          <Section header="Tough Style" isOpenAtDepth={4}>
            <p>The Tough Style contains the Entanglements Endurance, Extropy, Regeneration, Resistance, Stamina,</p>
            <p>
              These Entanglements are focused on unarmed defense, resisting injury, and using the Empowered state to
              ignore damage.
            </p>
            <Section header="Endurance">
              <EntanglementDescription
                intro={<p>You can shrug off the worst injuries and damage.</p>}
                ranks={[
                  <p>
                    You can act normally when you have an injured physical metabolism until its current maximum is below
                    the negative value of your rank in this entanglement. For example, if you have 2 ranks you can
                    ignore an injured metabolism with a current maximum of -2 or above.
                  </p>,
                  <p>
                    While in the Empowered state, you can treat any weapon attack that hits you as if it were an unarmed
                    attack, therefore you choose what Metabolisms it deals Threat to.
                  </p>,
                  <p>
                    Any time an attack deals Stress to you, you take 1 less Stress than it normally would cause and you
                    may spend 1 Self to enter the Empowered state immediately. If you do this, the Stress taken is
                    reduced by 2 instead of 1.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Extropy">
              <EntanglementDescription
                intro={<p>You can naturally create the energy your body needs to maintain itself.</p>}
                ranks={[
                  <p>You no longer require food, water, or oxygen to remain healthy and comfortable.</p>,
                  <p>
                    When taking an amount of Stress that would normally kill you, instead you may divide the Stress
                    between your other physical metabolisms. You can only be killed when all of your physical
                    metabolisms are brought to a lethal level simultaneously.
                  </p>,
                  <p>
                    When taking an amount of Stress that would normally kill you, instead you may divide the Stress
                    between all of your other metabolisms. You can only be killed when all of your metabolisms are
                    brought to a lethal level simultaneously.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Regeneration">
              <EntanglementDescription
                intro={
                  <p>
                    By storing clotting factors, platelets, and blood transfusions in your hidden body, you can
                    transfuse them into your physical body to seal your wounds rapidly.
                  </p>
                }
                ranks={[
                  <p>
                    All of your physical metabolisms heal Stress by 1 point per hour until they reach a current maximum
                    equal to your rank in this entanglement.
                  </p>,
                  <p>The healing described in rank 1 occurs each minute instead of each hour.</p>,
                  <p>Whenever you enter the Empowered state, heal 1 stress on all Physical Metabolisms.</p>,
                ]}
              />
            </Section>
            <Section header="Resistance">
              <EntanglementDescription
                intro={<p>It is exceptionally difficult to force your body and mind into undesired states.</p>}
                ranks={[
                  <p>You cannot be tripped, knocked prone, or pinned.</p>,
                  <p>You cannot be forced to move or stunned.</p>,
                  <p>You can choose to be immune to any poison, toxin, disease, or drug.</p>,
                ]}
              />
            </Section>
            <Section header="Stamina">
              <EntanglementDescription
                intro={<p>You can exert yourself for much longer durations than the body is normally capable.</p>}
                ranks={[
                  <p>
                    When you regenerate half of your <Crosslink target={topics.METABOLISM}>Metabolisms</Crosslink>{" "}
                    between
                    <Crosslink target={topics.ROUNDS}>combat rounds</Crosslink>, you regain an additional number of
                    points equal to your rank in this
                    <Crosslink target={topics.ENTANGLEMENTS}>Entanglement</Crosslink>.
                  </p>,
                  <p>
                    Your requirement for sleep to be fully rested is reduced by an hour per rank you have in this
                    <Crosslink target={topics.ENTANGLEMENTS}>Entanglement</Crosslink>.
                  </p>,
                  <p>
                    On any challenge that has the <Crosslink target={topics.STRESSFUL}>Stressful</Crosslink>
                    <Crosslink target={topics.COMPLICATION}>complication</Crosslink> due to physical exertion, you can
                    ignore this
                    <Crosslink target={topics.COMPLICATION}>complication</Crosslink>. The only limit on how long you can
                    continue a physical activity is sleep.
                  </p>,
                ]}
              />
            </Section>
          </Section>
          <Section header="Confident Style" isOpenAtDepth={4}>
            <p>The Confident Style contains the Entanglements Bandwidth, Hidden Body Insulation, Rapid Healing.</p>
            <p>
              These Entanglements are focused on willpower, preventing dissociation, inducing cascade events, and
              resisting external influence.
            </p>
            <Section header="Bandwidth">
              <EntanglementDescription
                intro={
                  <p>
                    You have a stronger connection between your two bodies, protecting you from dissociation and making
                    cascade events less stressful.
                  </p>
                }
                ranks={[
                  <p>
                    You can act normally when you have a dissociated hidden metabolism until its current maximum reaches
                    the negative of its score. For example, if you have a hidden metabolism with a score of 4 you can
                    act normally until it reaches -4.
                  </p>,
                  <p>
                    For any cascade event that is Stressful to induce, you can ignore the Stressful complication if you
                    are in the Empowered state.
                  </p>,
                  <p>
                    For any effect that causes a complication to be Strenuous or Stressful due to dissociative
                    properties, you may ignore these complications.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Hidden Body Insulation">
              <EntanglementDescription
                intro={<p>You have created a buffer that protects your hidden body from harm and influence.</p>}
                ranks={[
                  <>
                    <p>
                      When inside a naturally occuring cascade event you can choose whether to completely ignore its
                      effects or to experience it normally.
                    </p>
                    <p>
                      In addition, your mind is protected from outside influence. You cannot be the target of any effect
                      that reads, inhibits, detects, or influences your mind telepathically.
                    </p>
                  </>,
                  <p>
                    When taking Threat from fire, electricity, Evocation Attacks, or Photonic Attacks, you may add your
                    Focus to the metabolism pairing you use to react to the Threat.
                  </p>,
                  <p>
                    When an adjacent ally takes Threat from fire, electricity, Evocation Attacks, or Photonic Attacks,
                    you may add your Focus to the ally's metabolism pairing used to react to the Threat.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Persistance">
              <EntanglementDescription
                intro={
                  <p>
                    You have learned to maintain your consciousness with resources from the hidden body, even when your
                    physical body is no longer capable of sustaining your mind.
                  </p>
                }
                ranks={[
                  <p>You do not lose consciousness when your Focus is injured.</p>,
                  <p>
                    When you have taken sufficient stress to cause your death, you instead remain alive, incapacitated,
                    and liminally conscious until healed. Only completely destroying your brain can kill you. An enemy
                    that knows this, is armed, and is adjacent to you can use an action to execute you.
                  </p>,
                  <>
                    <p>You cannot die from old age or disease.</p>
                    <p>
                      If you are killed by having your brain destroyed, you instead become an incorporeal Hidden Body
                      Entity and can traverse Hidden Space. You may be able to return to embodied life if you find a way
                      to create an Avatar or Proxy.
                    </p>
                  </>,
                ]}
              />
            </Section>
            <Section header="Rapid Healing">
              <EntanglementDescription
                intro={
                  <>
                    <p>
                      Effectively healing the physical body requires abilities from multiple Styles. The Entanglements
                      Rapid Healing, Healing Field, and Distant Healing all grant you the ability to induce the Heal
                      cascade event and add different improvements to the event. This event can only target you or
                      anyone you touch and the amount of Progress gained while inducing it equals the amount of Stress
                      removed from a single physical metabolism. This healing cannot bring a metabolism's current
                      maximum above a number equal to the sum of 3 plus your total number of ranks in the 3
                      Entanglements that grant this event.
                    </p>
                    <p>This Entanglement is focused on improving the speed and healing power of this event.</p>
                  </>
                }
                ranks={[
                  <p>
                    You can induce the Heal event if you couldn't already. The amount of stress healed by this event
                    increases by a number equal to the sum of your total ranks in the 3 Entanglements that grant this
                    event.
                  </p>,
                  <p>
                    If you heal an injured metabolism by any amount, its current maximum is restored to 1, regardless of
                    how much healing you do.
                  </p>,
                  <p>The Heal cascade event can now be induced as a single normal action instead of a full action.</p>,
                ]}
              />
            </Section>
            <Section header="Vigilance">
              <EntanglementDescription
                intro={<p>You have unshakable mindfulness and self-awareness and can inspire the same in others.</p>}
                ranks={[
                  <>
                    <p>
                      Any time an external force attempts to manipulate, influence, or read your mind you are aware of
                      it.
                    </p>
                    <p>
                      You gain the Trait Self Motivated. This Trait is relevant any time you are attempting to
                      accomplish a long term task during down time or any time you need to resist a distraction from
                      your work.
                    </p>
                  </>,
                  <p>
                    You are immune to any effect that might make you afraid, be it natural, hallucinatory, illusory, or
                    supernatural. Dissociation can never cause you to flee a situation or turn on your allies.
                  </p>,
                  <p>Any ally within 3 meters of you also experiences the same immunities granted by Rank 2.</p>,
                ]}
              />
            </Section>
          </Section>
        </Section>
        <Section header="Esoteric Self Entanglements" isOpenAtDepth={4}>
          <p>
            The esoteric Entanglements associated with the Self metabolism are contained in the Styles Schizosomata,
            Sublimation, or Abjuration. They are unlocked by the Self core entanglement Empower.
          </p>
          <p>
            These styles are concerned with transforming the body, subliming the body into hidden space, and protecting
            the body from harm.
          </p>
          <Section header="Schizosomata" isOpenAtDepth={4}>
            <p>The Schizosomata Style contains the Entanglements Fade, Mimic, and Shift.</p>
            <p>
              These Entanglements are focused on transforming the body, changing how it is perceived, and mimicking
              others.
            </p>
            <p>
              A side benefit to this skill in manipulating the body is the ability to reconfigure your own hidden body
              to modify the entanglements you know. Any time you get at least an eight hour rest you can start this
              process by unlearning a number of entanglement ranks. These unlearned ranks are converted back into
              experience. You then cannot spend any new or existing experience points until the next time you get eight
              hours of rest. You can only unlearn a number of ranks equal to the sum of your ranks in Schizosomata.
            </p>
            <Section header="Fade">
              <EntanglementDescription
                intro={
                  <p>
                    This entanglement allows you to temporarily become less noticeable, invisible, and even to remove
                    yourself from the memory of others.
                  </p>
                }
                ranks={[
                  <>
                    <p>You can induce the Fade Self cascade event.</p>
                    <p>
                      Fade Self: You become less noticeable for the rest of the scene. In any environment where seeing a
                      person isn't alarming, all people that see you assume you are supposed to be there or that you are
                      someone else's problem. You do not become invisible, people simply just feel no need to pay
                      attention to your presence. People that know you will still recognize you and you appear clearly
                      on video.
                    </p>
                    <p>
                      The amount of Progress used to induce this event determines how secure of an area you can remain
                      unnoticed in. 1 point is effective in a public area, 2 in a private area, 4 in a restricted access
                      area, or 6 in an area where seeing any person at all would be a cause for alarm. If you act highly
                      unusual for the environment, take any aggressive action, or combat begins, then this effect ends.
                    </p>
                    <p>
                      Conversely, you can use this event to create the opposite effect, causing you to become extremely
                      noticeable, stand out in a crowd, and become impossible to ignore.
                    </p>
                  </>,
                  <p>
                    During your Fade Self events, anyone that witnesses you, including those that know and recognize
                    you, has selective memory loss of your presence if you wish them to. Those affected do not
                    experience lost time, they just cannot recall your presence or actions during this time. If an
                    action you take has overt lasting consequences, it will be attributed to the next most plausible
                    source instead of you. Video cameras will still capture your actions during this time, however, your
                    face will appear too blurry to identify.
                  </p>,
                  <>
                    <p>You can induce the Invisibility cascade event.</p>
                    <p>
                      Invisibility: You or a willing target you touch, becomes completely invisible for a number of
                      minutes equal to the amount of Progress used to induce this event plus your rank in this
                      Entanglement. Any time an invisible target makes a violent motion, including attack or dodge
                      actions, this effect immediately ends.
                    </p>
                  </>,
                ]}
              />
            </Section>
            <Section header="Mimic">
              <EntanglementDescription
                intro={
                  <p>
                    You can quickly memorize the patterns in the skills of others when you witness them and temporarily
                    gain the ability to mimic these skills yourself by inducing the following cascade event.
                  </p>
                }
                ranks={[
                  <>
                    <p>You can induce the Emulate Trait cascade event.</p>
                    <p>
                      Emulate Trait: After you witness someone using a skill based trait that you do not possess, you
                      may induce this event on your next turn. You temporarily gain the same trait for a number of
                      minutes equal to the Progress used to induce this event.
                    </p>
                  </>,
                  <p>
                    When using Emulate Trait you retain access to the trait permanently until you use the event again to
                    gain another trait.
                  </p>,
                  <>
                    <p>You can induce the cascade event Emulate Event.</p>
                    <p>
                      Emulate Event: After you witness someone inducing a cascade event, you may immediately induce this
                      event on your next turn. If you do so, you may use the event you witnessed one time within the
                      next hour.
                    </p>
                  </>,
                ]}
              />
            </Section>
            <Section header="Natural Weapon">
              <EntanglementDescription
                intro={
                  <p>
                    In combat, you can shift your limbs into natural weapons such as claws or hardened exoskeletal
                    plates.
                  </p>
                }
                ranks={[
                  <p>
                    When you enter the Empowered state, you can chose to have a natural weapon until you exit this
                    state. When you do, any unarmed attack you make can be treated as either a bladed or blunt weapon.
                  </p>,
                  <p>While you have a natural weapon, your unarmed attacks can be treated as size 2 weapons.</p>,
                  <p>While you have a natural weapon, your unarmed attacks deal an extra point of Threat.</p>,
                ]}
              />
            </Section>
            <Section header="Shift">
              <EntanglementDescription
                intro={
                  <p>
                    While the hidden body is mutable, the physical body is typically more static. Mastery of this
                    entanglement changes that, allowing you to physically transform yourself.
                  </p>
                }
                ranks={[
                  <p>
                    You permanently become an idealized version of yourself. You decide whether that means attractive,
                    youthful, intimidating, or any other appearance you aspire to. Gain a Trait that describes this
                    appearance.
                  </p>,
                  <>
                    <p>You can induce Shapeshift as a non-combat cascade event.</p>
                    <p>
                      Shapeshift: Over the course of an hour you slowly and permanently transform into a person of any
                      appearance, build, gender, or skin color. For every 10 centimeters or kilograms that your new body
                      differs from your original body, you must use an additional point of Progress to induce this
                      event.
                    </p>
                  </>,
                  <p>
                    When using the Shapeshift event you may also redistribute your starting physical metabolisms. For
                    each extra point of progress used to induce the event, you can permanently move a point from one
                    physical metabolism score to another. The minimum score a metabolism can attain this way is 2.
                  </p>,
                ]}
              />
            </Section>
          </Section>
          <Section header="Sublimation" isOpenAtDepth={4}>
            <p>
              The Sublimation Style contains the entanglements Blink, Deep Traversal, Nonlocality, Storage, Sublime
              Body, and Sublime Combat.
            </p>
            <p>
              These entanglements are focused on "subliming" the body into hidden space, rendering it invisible and
              intangible. With them you can safely force your being into hidden space, where you will experience a
              parallel realm that mirrors normal space. If you have ranks in any of these entanglements you can induce
              the Sublimate Self non-combat cascade event.
            </p>
            <p>
              Sublimate Self: This event has a difficulty of 3 and takes a minute to induce, after which it causes you
              to enter hidden space. While in hidden space you cannot interact with or be sensed by anything in physical
              space, however the physical world casts shadows into the hidden world that impede your movement. You can
              pass through the shadow of any object that has moved within a number of minutes equal to the sum of your
              ranks in the Sublimation Style. Anything that has been stationary for longer blocks your movement.
            </p>
            <p>
              In hidden space, your senses do not operate normally, rendering you blind and deaf. Instead, you have an
              omnidirectional sensation of the rough shape of unmoving objects within a meter that can detect the motion
              and position of anything within a meter of you. If you have special senses from other entanglements, such
              as Chromaception, Detect Sensorium, Exoproprioception, Sense Waveform, or Tactical Awareness, you keep
              these senses while sublimed.
            </p>
            <p>
              When entering hidden space, you leave your unconscious physical body behind in the physical world and
              traverse the world with only your hidden body. To exit the hidden space, you must return to your body and
              spend a minute concentrating.
            </p>
            <Section header="Blink">
              <EntanglementDescription
                intro={
                  <p>This entanglement allows you to rapidly enter hidden space and exit it somewhere else nearby.</p>
                }
                ranks={[
                  <>
                    <p>You can now induce the Blink cascade event as a full action.</p>
                    <p>
                      Blink: Teleport by forcing your body into hidden space and instantly exiting it anywhere within a
                      range equal to the amount of Progress used to induce the event. You cannot teleport through walls
                      or obstacles.
                    </p>
                  </>,
                  <p>Your Blink events are now a single combat action.</p>,
                  <p>
                    Your Blink events now move you up to double the amount of Progress used to induce them and you can
                    Blink through any obstacle that your ranks in the Sublimation Style would allow you to pass through
                    while in hidden space.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Deep Traversal">
              <EntanglementDescription
                intro={
                  <p>
                    This entanglement allows you to pass through more physical objects and traverse space quickly by
                    entering deeper reaches of hidden space.
                  </p>
                }
                ranks={[
                  <p>
                    While sublimed, you can pass through anything that has moved more recently than a number of hours
                    equal to the sum of your ranks in the Sublimation Style.
                  </p>,
                  <p>
                    While sublimed, you can pass through anything that has moved more recently than a number of days
                    equal to the sum of your ranks in the Sublimation Style plus the amount of progress used to induce
                    this event.
                  </p>,
                  <p>
                    While sublimed, you can pass through anything that has moved more recently than a number of years
                    equal to the sum of your ranks in the Sublimation Style plus the amount of progress used to induce
                    this event.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Storage">
              <EntanglementDescription
                intro={
                  <p>
                    This lets you store physical objects in hidden space, rendering them invisible, weightless, and
                    intangible, and then retrieve them later when needed.
                  </p>
                }
                ranks={[
                  <>
                    <p>
                      You can induce the Store/Retrieve Object cascade event. Inducing this event is a normal action
                      instead of a full action
                    </p>
                    <p>
                      Store/Retrieve Object: When you complete the action, a single uncontested nonliving item you are
                      touching vanishes as it moves into your stored space. At any later time, you can induce this event
                      again to retrieve the item into the position required for immediate use, for example, a weapon
                      would appear in your hand or a garment would appear already worn on your body.
                    </p>
                    <p>You can maintain as many stored items as you can fit in 1 cubic meter.</p>
                  </>,
                  <>
                    <p>
                      Inducing Store/Retrieve Object events is no longer Stressful and can now target up to 3 objects at
                      once.
                    </p>
                    <p>You can maintain as many stored items as you can fit in 2 cubic meters.</p>
                  </>,
                  <>
                    <p>Inducing Store/Retrieve Object events is now a free action.</p>
                    <p>You can maintain as many stored items as you can fit in 3 cubic meters.</p>
                  </>,
                ]}
              />
            </Section>
            <Section header="Sublime Body">
              <EntanglementDescription
                intro={
                  <p>
                    This entanglement allows you to bring your physical body with you when entering hidden space and
                    eventually other people.
                  </p>
                }
                ranks={[
                  <p>
                    When inducing Sublimate Self you can choose to increase the difficulty to 6 to make your physical
                    body vanish entirely from physical space. If you do so, you can exit hidden space at any time and
                    your body will reappear at the new location you traveled to while sublimed.
                  </p>,
                  <p>
                    When inducing Sublimate Self you can bring one willing living participant that you touch into hidden
                    space with you for each additional 3 points of Progress used to induce the event. They can move
                    freely in hidden space, but can only exit when you decide they do or naturally after an hour.
                  </p>,
                  <p>
                    You can force an unwilling living participant to enter hidden space if you can remain in physical
                    contact with them for the entire time it takes to induce Sublimate Self. To do this, you must
                    successfully grapple the enemy and maintain this grapple until the event is completed. To complete
                    the even you need to get more Progess on it than the enemy's <Pair focus self /> reaction. When you
                    do, you may choose to enter with them or send them alone. They can move freely in hidden space, but
                    can only exit when you decide they do or naturally after an hour.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Nonlocality">
              <EntanglementDescription
                intro={
                  <p>
                    Time and interconnection work differently in hidden space than our intuition of physcial space would
                    expect. You can take advantage of this to travel great distances effortlessly.
                  </p>
                }
                ranks={[
                  <p>
                    You can ignore gravity while you are in hidden space, however any other person you have brought into
                    hidden space cannot.
                  </p>,
                  <>
                    <p>
                      While in hidden space, you can effortlessly cross physical space at rapid speeds. Outside of
                      combat this allows you to travel at rates up to 1000 kilometers per hour. Inside of combat, if you
                      have 3 points of Progress on a move action you can move to any space you can sense. It does not
                      affect the free movement that comes with other actions.
                    </p>
                    <p>
                      Additionally, while you are in hidden space, your physical body enters a state of suspended
                      animation and does nor require sleep, water, food, or oxygen.
                    </p>
                  </>,
                  <p>
                    While in hidden space, you can travel anywhere on the planet within an hour. If you also have ranks
                    in Deep Traversal you can even drift to other locations in the solar system within days, however
                    exiting hidden space while unprotected from the vacuum of space is not wise.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Sublime Combat">
              <EntanglementDescription
                intro={<p>This entanglement and improves the tactical capabilities of subliming your body.</p>}
                ranks={[
                  <p>
                    Inducing Sublimate Self or exiting hidden space are now both{" "}
                    <Crosslink target={topics.FULL_ACTION}>full actions</Crosslink> that can be done in combat.
                  </p>,
                  <p>
                    Using Sublimate Self or exiting hidden space are all now{" "}
                    <Crosslink target={topics.ACTION}>normal combat actions</Crosslink>. If you exit hidden space or use
                    the Blink event and then attack in the same turn, the target will be surprised enough that you can
                    use
                    <Crosslink target={topics.ADVANTAGE}>Find an Advantage</Crosslink> to adjust the
                    <Crosslink target={topics.COMPLICATION}>complications</Crosslink> of the attack.
                  </p>,
                  <p>
                    You can now use Sublimate Self instead of a normal{" "}
                    <Crosslink target={topics.REACTION}>reaction</Crosslink> to being attacked in order to phase your
                    self out of physical harm's way. The <Crosslink target={topics.PROGRESS}>Progress</Crosslink> used
                    to induce the event reduces the <Crosslink target={topics.THREAT}>Threat</Crosslink> dealt by the
                    attack in the same way a normal
                    <Crosslink target={topics.REACTION}>reaction</Crosslink>
                    would. After resolving the <Crosslink target={topics.REACTION}>reaction</Crosslink>, you enter
                    hidden space and can't be targeted by physical attacks.
                  </p>,
                ]}
              />
            </Section>
          </Section>
          <Section header="Abjuration" isOpenAtDepth={4}>
            <p>The Abjuration Style contains the entanglements Filter, Retrogradient and Ward.</p>
            <p>
              These Entanglements are focused on protecting yourself and others with wards and barriers that prevent
              forces from propagating through an area. If you have ranks anywhere in this style you can induce the
              Create Ward cascade event.
            </p>
            <p>
              Create Ward: This event creates a translucent barrier. The durability, size, and duration of these
              barriers are all equal to the amount of Progress used to induce this event plus the sum of your ranks in
              the Abjuration style. Durability indicates the number of points of threat the barrier can absorb before it
              is destroyed, size indicates the maximum width and height in meters your barriers can be, and duration
              indicates the maximum number of rounds they last for if they are not destroyed or dismissed by you as a
              free action.
            </p>
            <p>
              Barriers you create appear on a straight line of your choosing starting from any adjacent space. If this
              line crosses any occupied spaces, you choose which side of the barrier each occupier is on.
            </p>
            <p>
              Barriers cannot be crossed by anything and provide full cover until they are destroyed, their duration
              expires, or you dismiss them. Any attack targeting the barrier or blocked by the barrier reduces its
              current durability by the amount of threat dealt. An attack that reduces durability to 0 destroys the
              barrier but deals no further threat to anything behind it.
            </p>
            <p>
              Barriers block things in hidden space as well as physical objects. However, characters with a sum of ranks
              in the Sublimation style that exceed the current durability of the barrier can phase through it while in
              hidden space.
            </p>
            <p>
              The appearance of barriers varies with the individual creating them, and you do have a degree of control
              over the cosmetic appearance of each one you create. However, unless you have ranks in Filter, your
              barriers are always transparent enough not to hinder vision but still easily visible due to a faint color
              or luminosity.
            </p>
            <Section header="Area Denial">
              <EntanglementDescription
                intro={<p>You can use abjuration wards to forbid access to an area instead of just making a wall.</p>}
                ranks={[
                  <p>
                    When inducing Create Ward, you can choose to target an area instead a line. Select a number of
                    adjacent unoccupied spaces equal to the size of the ward, the boundaries of the selected spaces now
                    act as the boundary your ward creates. This prevents anything from entering the space that the
                    barrier would block.
                  </p>,
                  <p>
                    When inducing Create Ward, you may choose for it to be a sphere with a radius of the barrier's size.
                    The sphere must be either adjacent to you or contain you and be otherwise unoccupied. If it contains
                    you, you can move freely within it but not exit it until you dismiss it.
                  </p>,
                  <p>
                    When inducing Create Ward as a sphere or an area you can include occupied spaces. For each person
                    occupying the area, you may choose if they remain in the area and can move freely within it, or if
                    they instead are ejected from the area into a space of their choosing.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Filter">
              <EntanglementDescription
                intro={
                  <p>
                    When using the Create Ward event you may add filtering properties to the barrier you create. These
                    filters cannot be used to cause damage; for example, if a blocked object is inside an object that
                    can pass, then both objects are blocked.
                  </p>
                }
                ranks={[
                  <>
                    <p>
                      You can choose if your barrier is opaque, translucent, or completely invisible when you create it.
                    </p>
                    <p>
                      When creating a barrier, you can target it to a single individual object or entity. The target is
                      either the only thing the barrier blocks, or the only thing that the barrier allows to pass.
                      Things that can pass through the barrier can only do so while moving at speeds slower than 1 space
                      per round. You may add an additional target for each point of Progress you remove from that used
                      to induce the event.
                    </p>
                  </>,
                  <p>
                    When creating a barrier, you can target it to a specific class of objects, a specific type of
                    entity, or a specific homogeneous substance. For example, you could make selections such as metallic
                    objects, humans, or oxygen. Things allowed through the filter can pass through it at any speed. You
                    may add an additional type of target for each point of Progress you remove from that used to induce
                    the event.
                  </p>,
                  <>
                    <p>
                      When creating your barrier you can opt to choose what it filters on a case by case basis. You are
                      aware of anything that comes within a space of the barrier no matter where you are, and if it is
                      about to pass through you can choose whether to allow it or block it. If it returns a second time
                      you can change your previous choice. Creating invisible barriers with this property can allow you
                      discreetly monitor an area or set up one way traps.
                    </p>
                    <p>
                      Additionally, you can create bio-filters that are capable of removing substances, such as
                      undesirable pathogens or toxins, from a person passing through it. Anyone unaware of the nature of
                      this bio-filter, unwilling to undergo its effects, or moving faster than 1 space per round cannot
                      pass through it.
                    </p>
                  </>,
                ]}
              />
            </Section>
            <Section header="Retrogradient">
              <EntanglementDescription
                intro={
                  <p>
                    You can create a defensive field around yourself when attacked. Ranged attacks and other projectiles
                    must move further through this field than other attacks, resulting in greatly reduced damage.
                  </p>
                }
                ranks={[
                  <>
                    <p>
                      Instead of reacting normally to an incoming attack, you can choose to induce the event
                      Retrogradient as a reaction.
                    </p>
                    <p>
                      Retrogradient: Instantly project a defensive field around yourself that protects you against a
                      single incoming attack. Reduce the Threat dealt by this attack by the amount of Progres used to
                      induce the event. If the attack is ranged, reduce it by an additional 3 points.
                    </p>
                  </>,
                  <p>
                    When inducing Retrogradient, the incoming attack is reduced by an additional 6 points if it is
                    Ranged, 3 points if it is a melee weapon, and 1 point if it is unarmed.
                  </p>,
                  <p>
                    You may choose to induce Retrogradient in addition to your normal reaction, instead of in place of
                    it.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Ward">
              <EntanglementDescription
                intro={
                  <p>
                    You can improve the duration, size, and durability of barriers created by the Create Ward event.
                  </p>
                }
                ranks={[
                  <>
                    <p>The duration of your barriers is now measured in minutes instead of rounds.</p>
                    <p>You may make a barrier that is a sphere around or adjacent to you.</p>
                  </>,
                  <p>
                    The duration of your barriers is now measured in hours instead of minutes. The size and durability
                    of your barriers is double what it would normally be.
                  </p>,
                  <p>
                    The duration of your barriers is now measured in days instead of hours. The size and durability of
                    your barriers is triple what it would normally be.
                  </p>,
                ]}
              />
            </Section>
          </Section>
        </Section>
      </Section>

      <Section header="Near Entanglements">
        <p>
          The Entanglements associated with the <Metabolism near /> Metabolism are grouped into the Intuitive Styles
          Smooth, Mobile, and Bright, and the Esoteric Styles Electromagnetism, Sublimation, or Chromodynamism.
        </p>
        <p>These styles are concerned with armed melee combat and navigating spaces, objects, and concepts.</p>
        <Section header="Core Entanglement: Exoproprioception" isOpenAtDepth={4}>
          <EntanglementDescription
            ranks={[
              <>
                <p>
                  Increase your <Metabolism near /> Metabolism score by 1.
                </p>
                <p>
                  You can now buy Entanglements within the 6 styles associated with the <Metabolism near /> metabolism.
                </p>
                <p>
                  You have the sense of exoproprioception within a range of meters equal to your <Metabolism near />{" "}
                  score. Similar to natural proprioception that allows you to know the position and orientation of any
                  part of your body, exoproprioception allows you to sense the position of any object within range. This
                  sense provides accurate information about the position and shape of things, but not visual or tactile
                  information like color, texture, patterns, weight, or small details.
                </p>
                <p>At this rank, this sense is developed well enough to navigate blindly at full speed.</p>
              </>,
              <>
                <p>
                  Increase your <Metabolism near /> Metabolism score by 1.
                </p>
                <p>
                  During any non-combat <Crosslink target={topics.CHALLENGE}>Challenge</Crosslink> that is not using{" "}
                  <Metabolism focus />, you can take a point of <Crosslink target={topics.CHALLENGE}>Stress</Crosslink>{" "}
                  to <Metabolism near /> in order to add <Metabolism focus />
                  as a third Metabolism to your <Crosslink target={topics.PAIRING}>pairing</Crosslink>.
                </p>
                <p>
                  Additionally, your exoproprioception is now sensitive enough that you can blindly engage in combat
                  without penalty with anything in its range.
                </p>
              </>,
              <>
                <p>
                  Increase your <Metabolism near /> Metabolism score by 1.
                </p>
                <p>
                  Your exoproprioception allows you to react to unforeseen harm, opponents do not get to
                  <Crosslink target={topics.ADVANTAGE}>Find an Advantage</Crosslink> if they attack you while unaware.
                </p>
              </>,
            ]}
          />
        </Section>
        <Section header="Intuitive Near Entanglements" isOpenAtDepth={4}>
          <Section header="Smooth Style" isOpenAtDepth={4}>
            <p>
              The Smooth Style contains the Entanglements Ambidexterity, Deft Combat, Melee Mastery, Stealth Strike, and
              Silence.
            </p>
            <p>These Entanglements are focused on armed melee attacks, consistent damage, and stealth.</p>
            <Section header="Ambidexterity">
              <EntanglementDescription
                intro={
                  <p>
                    You can split your proprioceptive focus between both hands without any loss of fidelity or
                    coordination.
                  </p>
                }
                ranks={[
                  <p>
                    When you hold a weapon in each hand, you can attack with both of them as a single full action. Both
                    attacks must have the same target. The attacks have their normal metabolism costs, but the lighter
                    weapon has its minimum cost reduced by 1.
                  </p>,
                  <p>Attacking with both of your hands is now a regular action.</p>,
                  <p>
                    When attacking with both of your hands, the lighter weapon has no minimum metabolism cost. Each
                    attack can have a different target.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Counter">
              <EntanglementDescription
                intro={<p>You can use the momentum of your opponent's attacks against them to strike back.</p>}
                ranks={[
                  <p>
                    When you are reacting to an attack, you can hit the attacker with a counter attack that deals an
                    amount of threat to the target equal to your rank in this Entanglement.
                  </p>,
                  <p>
                    When you use a reaction to counter attack an opponent, you may skip the reaction's free movement to
                    force the opponent to move the same distance instead.
                  </p>,
                  <p>
                    Any time you react to an attack, you may spend more metabolism points than required to reduce the
                    threat dealt to 0. If you do so, any extra points you spend after reducing the incoming threat to 0
                    is dealt as threat to the attacker.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Deft Combat">
              <EntanglementDescription
                intro={
                  <p>This entanglement allows you to make the most of your enhanced finesse while in close combat.</p>
                }
                ranks={[
                  <p>
                    When spending metabolism points to make an attack, you can ignore the size property of any weapon
                    with a size lower than your rank in this entanglement. This attack still does the full damage of a
                    weapon of that size.
                  </p>,
                  <p>Drawing or reloading a weapon are now both free actions.</p>,
                  <p>
                    In a whirlwind of motion, you can rapidly strike every adjacent target as a single action. Roll a
                    normal attack and divide the Threat generated by it between all adjacent targets.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Melee Mastery">
              <EntanglementDescription
                intro={<p>You have perfected the movements of the blades and blows of close combat.</p>}
                ranks={[
                  <p>
                    You gain the Trait Melee Mastery, this Trait is relevant any time you attempt to make an attack with
                    a melee weapon.
                  </p>,
                  <p>
                    Your melee reach while wielding a weapon now includes every space within a range of 2. If you are
                    wielding a weapon with the Reach trait, your melee reach instead has a range of 3.
                  </p>,
                  <p>
                    You can add Focus as a third metabolism to the metabolism pairing used to make an attack with a
                    melee weapon.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Silence">
              <EntanglementDescription
                intro={<p>You can render yourself and your immediate surroundings completely silent.</p>}
                ranks={[
                  <p>
                    You can induce the cascade event Silence. This event can only target you, has a duration equal to
                    your Far score, and affects a radius of meters equal to your rank in this entanglement. Sound does
                    not cannot enter, exit, or be heard inside the affected area.
                  </p>,
                  <p>
                    Even when the Silence event is not active, you can always move completely silently at any time you
                    choose to as long as you're moving at a walking pace or slower.
                  </p>,
                  <>
                    <p>You can still hear normally inside your own Silence events.</p>
                    <p>
                      Even when the Silence event is not active, you can always move at any speed completely silently at
                      any time you choose to.
                    </p>
                  </>,
                ]}
              />
            </Section>
          </Section>
          <Section header="Mobile Style" isOpenAtDepth={4}>
            <p>The Mobile Style contains the Entanglements Evasion, Speed, Traversal</p>
            <p>These Entanglements are focused on melee defense, movement, and evasion.</p>
            <Section header="Charge">
              <EntanglementDescription
                intro={<p>You can effectively apply your movement in combat to your attacks and defenses.</p>}
                ranks={[
                  <p>
                    You can charge as a single action, allowing you to move and then attack as part of the same action.
                    When you do so, decide the number of metabolism points you want to spend from the pairing you will
                    use to attck with and divide this number between the movement and the attack.
                  </p>,
                  <p>
                    When you use an action to move, but not a charge, remember the number of metabolism points used to
                    move. The first time you are attacked before your next turn, add this number to your reaction's
                    Progress.
                  </p>,
                  <p>
                    When you use a charge action, you do not need to divide the metabolism points you spent. Instead,
                    apply the full number to both the movement and the attack. Additionally, the first time you are
                    attacked before your next turn, add this full number to your reaction's Progress.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Evasion">
              <EntanglementDescription
                intro={<p>You have a strong sense for where attacks will land and how to avoid them.</p>}
                ranks={[
                  <p>When reacting to an attack, if you reduce the threat dealt to 1, it is instead reduced to 0.</p>,
                  <p>
                    Gain the trait Evasive. It is relevant any time you react to a close combat attack, or use an action
                    to move.
                  </p>,
                  <p>
                    The free movement you get when using a reaction in response to any attack increases by 1 meter.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Speed">
              <EntanglementDescription
                intro={<p>You can cross distances much faster than before.</p>}
                ranks={[
                  <p>
                    Any time you use an action to move, add your rank in this Entanglement to the Progress created.
                  </p>,
                  <p>The free movement you get when using an action increases by 1 meter.</p>,
                  <p>The distance you travel per point of Progress created by a move action increases by 1 meter.</p>,
                ]}
              />
            </Section>
            <Section header="Traversal">
              <EntanglementDescription
                intro={<p>Obstacles and terrain no longer hinder your movement.</p>}
                ranks={[
                  <p>You can treat difficult terrain as normal terrain.</p>,
                  <p>You can freely pass through enemy spaces, but you cannot end an action in them.</p>,
                  <p>
                    You can traverse vertical walls as if they were normal terrain up to a height equal to your near
                    score in meters. You must end the action on normal flat terrain.
                  </p>,
                ]}
              />
            </Section>
          </Section>
          <Section header="Bright Style" isOpenAtDepth={4}>
            <p>The Bright Style contains the Entanglements Analyze Cascade, Episemiotics, Healing Field.</p>
            <p>
              These Entanglements are focused on understanding your surroundings and the hidden connections between
              things.
            </p>
            <Section header="Analyze Cascade">
              <EntanglementDescription
                intro={
                  <p>
                    You have insight into the fundamental principles underpinning cascade effect interactions between
                    the hidden and normal space. This knowledge allows you to discern details about cascade events,
                    artifacts, and entanglements.
                  </p>
                }
                ranks={[
                  <>
                    <p>
                      You can tell if anyone you see has entanglements or is carrying objects with artifact functions.
                    </p>
                    <p>
                      You can spend an hour examining an artifact to identify and enumerate all of its functions and
                      capabilities.
                    </p>
                  </>,
                  <>
                    <p>
                      You know the type, intensity, exact boundaries, probable origin, and general nature of any cascade
                      event that you are in or near for more than a minute.
                    </p>
                    <p>
                      When an avatar, proxy, or trans-stygian entity, is within a number of meters equal to your Near
                      score, you become aware of its presence and position.
                    </p>
                  </>,
                  <>
                    <p>
                      You can detect any objects that have been stored in hidden space by the Sublimation style, the
                      aperture( ) artifact function, or any other means.
                    </p>
                    <p>You can tell what Style someone the most ranks in if you can see them for a minute.</p>
                  </>,
                ]}
              />
            </Section>
            <Section header="Episemiotics">
              <EntanglementDescription
                intro={
                  <p>
                    Your hidden body can interface with others nearby, enabling you to understand communication on an
                    empathic level or even to steal memories from others.
                  </p>
                }
                ranks={[
                  <p>
                    You can comprehend, but not speak, read, or write, the spoken language of anyone within 9 meters of
                    you.
                  </p>,
                  <p>You can speak, read, or write any language as fluently as anyone within 9 meters of you.</p>,
                  <>
                    <p>You can now induce the Excise Memory cascade event.</p>
                    <p>
                      Excise Memory: Touch a single target. Any single fact that this target knows (or falsely believes)
                      becomes known to you as well. This fact must be simple enough to be articulated in a single
                      sentence. You may take an additional point of Stress when using this event to cause the target to
                      forget this fact after you learn it.
                    </p>
                  </>,
                ]}
              />
            </Section>
            <Section header="Healing Field">
              <EntanglementDescription
                intro={
                  <>
                    <p>
                      Effectively healing the physical body requires abilities from multiple Styles. The Entanglements
                      Rapid Healing, Healing Field, and Distant Healing all grant you the ability to induce the Heal
                      cascade event and add different improvements to the event. This event can only target you or
                      anyone you touch and the amount of Progress gained while inducing it equals the amount of Stress
                      removed from a single physical metabolism. This healing cannot bring a metabolism's current
                      maximum above a number equal to the sum of your total ranks in the 3 Entanglements that grant this
                      event.
                    </p>
                    <p>This entanglement is focused on increasing the area of effect of healing.</p>
                  </>
                }
                ranks={[
                  <>
                    <p>You can induce the Heal cascade event if you couldn't already.</p>
                    <p>The target can divide the amount healed between all physical metabolisms.</p>
                  </>,
                  <p>The target heals the full amount on all physical metabolisms.</p>,
                  <p>Every ally adjacent to the target also heals the same amount on every physical metabolism.</p>,
                ]}
              />
            </Section>
            <Section header="Polymath">
              <EntanglementDescription
                intro={
                  <p>
                    Your hidden body is constantly accessing and archiving the knowledge of those nearby, making you a
                    competent jack-of-all-trades.
                  </p>
                }
                ranks={[
                  <p>
                    You gain an additional Trait. Once a day, you can replace this trait with any knowledge or skill
                    based trait that a person within 9 meters of you has.
                  </p>,
                  <p>
                    You gain an additional Trait. Once a day, you can replace this trait with any knowledge or skill
                    based trait that a person within 9 meters of you has.
                  </p>,
                  <p>
                    You gain an additional Trait. Once a day, you can replace this trait with any knowledge or skill
                    based trait that a person within 9 meters of you has.
                  </p>,
                ]}
              />
            </Section>
          </Section>
        </Section>
        <Section header="Esoteric Near Entanglements" isOpenAtDepth={4}>
          <p>
            The esoteric Entanglements associated with the Near metabolism are contained in the Styles Electromagnetism,
            Gravitonertia, or Chromodynamism. They are unlocked by the Near core entanglement Exoproprioception.
          </p>
          <p>
            These styles are concerned with understanding and manipulating the fundamental forces that connect
            everything.
          </p>
          <Section header="Electromagnetism" isOpenAtDepth={4}>
            <p>
              The Electromagnetism Style contains the Entanglements Modulate Waveform, Redirect Waveform, Sense
              Waveform, and Transmute Waveform.
            </p>
            <p>
              These Entanglements allow you to sense and manipulate electricity, magnetism, light and any other part of
              the spectrum of electromagnetism.
            </p>
            <p>
              If you have any ranks within this style, you can induce the Photonic Attack cascade event as a normal
              action that is Risky.
            </p>
            <p>
              Photonic Attack: This event blasts a target with a beam of light or an electrical discharge. This attack
              has a range and deals an amount of threat to Flight + Far equal to the amount of Progress used to induce
              it, however the maximum amount of Progress you can create is equal to the sum of your ranks within this
              style. This attack cannot be reacted to.
            </p>
            <Section header="Modulate Waveform">
              <EntanglementDescription
                intro={
                  <p>
                    This entanglement grants you extremely fine control over low-intensity electromagnetic phenomena.
                  </p>
                }
                ranks={[
                  <>
                    <p>You gain the ability to induce the Disrupt Vision cascade event.</p>
                    <p>
                      Disrupt Vision: A target you can see must attempt to resist this event with a Focus + Self
                      Challenge, or be blinded for a number or rounds equal to the progress used to induce this event.
                    </p>
                    <p>
                      Write to Retina: After inducing this event, you can carefully target photons onto the retinas of
                      one person you can see for the rest of the scene. This allows you to send people short written
                      messages, or to show them simple unmoving illusions. These illusions may be effective at
                      communicating or startling someone, but as soon as the target moves their head their illusory
                      nature is revealed.
                    </p>
                  </>,
                  <>
                    <p>
                      You gain the ability to induce the following Alter Wavelength and Write to Retina cascade events.
                    </p>
                    <p>
                      Alter Wavelength: You can change the wavelength of the light within a 1 meter space. This may make
                      invisible parts of the spectrum visible to others, or hide the visible light entering this space.
                      However, this can create illumination that is not present.
                    </p>
                    <p>
                      Write to Retina: After inducing this event, you can carefully target photons onto the retinas of
                      anyone you can see for the rest of the scene. This allows you to send people short written
                      messages, or to show them simple unmoving illusions. These illusions may be effective at
                      communicating or startling someone, but as soon as the target moves their head their illusory
                      nature is revealed.
                    </p>
                  </>,
                  <>
                    <p>
                      Electromagnetism is the force that dominates molecular chemistry, however the other
                      Electromagnetism entanglements are too crude to influence these small processes. At this rank, you
                      can now influence chemistry with the following non-combat cascade event.
                    </p>
                    <p>
                      Manipulate Chemistry: You can control the outputs of any ongoing non-living chemical process. This
                      cannot be used to create elements that are not present, but it can create any compound that can be
                      made from existing elements. It cannot create materials that would react violently with
                      themselves, the atmosphere, or the immediate surroundings.
                    </p>
                  </>,
                ]}
              />
            </Section>
            <Section header="Redirect Waveform">
              <EntanglementDescription
                intro={<p>This entanglement allows you to manipulate the path electromagnetism follows.</p>}
                ranks={[
                  <>
                    <p>You can induce the Redirect Waveform non-combat cascade event.</p>
                    <p>
                      Redirect Waveform: You change the path of any electromagnetism that is less intense than the
                      electricity in household wiring, the light of a strong residential lightbulb, or the magnetism of
                      a 6 centimeter rare earth magnet. This enables you to short circuit any electronic device,
                      permanently disabling it.
                    </p>
                    <p>
                      No effect created by this event can deal more damage than your Photonic Attack. The maximum
                      distance the path can be moved, and the maximum duration in minutes it will follow the new path
                      for, are both equal to the amount of Progress used to induce this.
                    </p>
                  </>,
                  <>
                    <p>
                      Your Redirect Waveform events can now affect any electromagnetism that is less intense than the
                      electricity in an overhead residential power line, the light of a high-intensity spotlight, or the
                      magnetism of an industrial electromagnet.
                    </p>
                    <p>
                      This also enables you to designate a number of spaces equal to your Intelligence score, any
                      objects or entities you choose within the spaces will be invisible for the duration of this event
                      as long as they remain in one of these spaces.
                    </p>
                  </>,
                  <>
                    <p>
                      Your Redirect Waveform events can now affect any electromagnetism that is less intense than the
                      electricity in a high-tension distribution line or a 1 meter beam of direct equatorial sunlight.
                    </p>
                    <p>
                      This also enables you to designate a number of spaces equal to your Intelligence score; light
                      cannot propagate in these spaces. No one can see through the black darkness in these spaces and
                      anyone inside them is blinded. If you have any ranks in Modulate Waveform you can still see
                      through these spaces normally.
                    </p>
                  </>,
                ]}
              />
            </Section>
            <Section header="Sense Waveform">
              <EntanglementDescription
                intro={<p>You can sense and interpret additional parts of the electromagnetic spectrum.</p>}
                ranks={[
                  <>
                    <p>
                      You can emit a tiny amount of light in an under utilized portion of the spectrum and then sense
                      its reflections, granting you perfect night vision even in absolute darkness.
                    </p>
                    <p>
                      Additionally, if you are sublimed into hidden space you retain your normal vision of physical
                      space.
                    </p>
                  </>,
                  <p>
                    You can interpret emissions of other parts of the spectrum. For example, sensing infrared can grant
                    you practical heat vision, or sensing radio and microwave emissions can be used to detect the
                    strength and origin of any broadcast.
                  </p>,
                  <p>
                    You can emit a tiny amount of x-rays and sub-millimeter waves and then sense their reflections. This
                    allows you to see through solid materials and examine their contents or internal structure.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Transmute Waveform">
              <EntanglementDescription
                intro={
                  <p>
                    This entanglement allows you to convert the electromagnetism in a localized area from one form to
                    another.
                  </p>
                }
                ranks={[
                  <>
                    <p>You can induce the Transmute Waveform non-combat cascade event.</p>
                    <p>Redirect Waveform:</p>
                    <p>
                      You can convert small amounts of ambient energy from one form of electromagnetism to another. For
                      example, you could turn the static generated by a person moving into a soft glow on their body, or
                      you could turn a portion of ambient light into an weak electrical discharge.
                    </p>
                    <p>
                      No effect created by this event can deal more damage than your Photonic Attack. The duration of
                      this event in minutes and the number of spaces it can affect are both equal to the amount of
                      Progress used to induce it.
                    </p>
                  </>,
                  <p>
                    Your Transmute Waveform events can now convert large amounts of flowing energy from one form of
                    electromagnetism to another. For example, you could cause a power line to emit light bright enough
                    to temporarily blind anyone that looks at it, or you could turn direct sunlight into a powerful
                    electrical discharge.
                  </p>,
                  <p>
                    Your Transmute Waveform events can now create any form of electromagnetism, or cause it to dissipate
                    into heat or friction in the affected area.
                  </p>,
                ]}
              />
            </Section>
          </Section>
          <Section header="Gravitonertia" isOpenAtDepth={4}>
            <p>The Gravitonertia Style contains the entanglements Alter Mass, Levitation, Redirect and Telekinesis.</p>
            <p>
              These entanglements allow you to manipulate density, mass, and motion. If you have ranks in this style you
              can induce the Kinetic Attack cascade event as a combat action that is Risky.
            </p>
            <p>
              Kinetic Attack: Levitate a small object and throw it at a target with bullet-like force. This attack deals
              an amount of Threat equal to the amount of Progress used to induce it and can be reacted to by Flight +
              Far. This attack has a maximum range equal to the total number of ranks you have in this style. You may
              select multiple targets within this range, up to a number equal to the total number of ranks you have in
              this style, and then distribute the total threat generated by the attack between the targets as you see
              fit.
            </p>
            <p>
              At the GM's discretion kinetic attacks may not be possible in some environments that do not have small,
              hard, unattended objects available. You may carry small objects to use as ammunition into areas too barren
              to provide ammunition.
            </p>
            <Section header="Alter Mass">
              <EntanglementDescription
                intro={
                  <p>
                    You can induce the Alter Mass cascade event. This event causes an unattended non-living object of a
                    size up to 10 centimeters per point of Progress used to change mass for the rest of the scene. The
                    amount it changes by is determined by your ranks in this entanglement.
                  </p>
                }
                ranks={[
                  <p>
                    Your Alter Mass events can increase an object's mass up to double its original mass, or reduce it
                    down to half of its original mass.
                  </p>,
                  <p>
                    Your Alter Mass events can increase an object's mass up to triple its original mass, or reduce it
                    down to a quarter of its original mass.
                  </p>,
                  <p>
                    Your Alter Mass events can increase an object's mass up to quadruple its original mass, or reduce it
                    down to 10% of its original mass.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Levitation">
              <EntanglementDescription
                intro={<p>You move yourself and others with your mind.</p>}
                ranks={[
                  <>
                    <p>You can induce the Levitate cascade event.</p>
                    <p>
                      Levitate: You rise off the ground by a number of meters equal to your rank in this engtanglement.
                      At the start of each of your turns before taking actions, you may ascend or descend up to the same
                      distance again. Other than ascending or descending, you cannot move while in the air unless you
                      are next to a surface you can push yourself along on, such as a cieling or wall.
                    </p>
                  </>,
                  <p>
                    You can now target another person you touch with your Levitate event. When you do so, decide if they
                    will control their vertical movement at the start of their turns, or if you will control it at the
                    start of your turns. If the target is unwilling, they can resist with a Focus + Self. If they beat
                    or tie the amount of Progress used to induce the event, it has no effect.
                  </p>,
                  <p>
                    For each point of Progress produced by a Strenuous action requiring Flight + Near, you (or the
                    target if you chose to give them control) can cause the levitated person to move a meter in any
                    direction.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Redirect">
              <EntanglementDescription
                intro={
                  <p>
                    This entanglement allows you to manipulate the motion of nearby objects and improves your kinetic
                    attacks.
                  </p>
                }
                ranks={[
                  <>
                    <p>You can induce the Redirect Projectiles cascade event as a normal action.</p>
                    <p>
                      Redirect Projectiles: Until your next turn, reduce the Threat dealt by all incoming projectiles by
                      the amount of Progress used to induce this event.
                    </p>
                  </>,
                  <>
                    <p>You can affect someone else you touch with the Redirect Projectiles event.</p>
                    <p>Additionally, you can induce the Redirect Momentum cascade event.</p>
                    <p>
                      Redirect Momentum: Change the direction of a moving object that is the size of a motorcycle or
                      smaller by up to 45 degrees. This object must be within a range of meters equal to your total
                      ranks within the Gravitonertia style.
                    </p>
                  </>,
                  <>
                    <p>
                      If anyone under the effects of Redirect Projectiles is able to reduce the Threat dealt by an
                      attack by more than the amount needed to reduce it to 0, they can redirect the attack into an
                      adjacent target. This target is dealt Threat equal to the difference between the Threat that would
                      have been dealt to you and the amount you can reduce it by.
                    </p>
                    <p>
                      The Redirect Momentum event can now change the direction of a moving object that is the size of a
                      truck or smaller by up to 90 degrees.
                    </p>
                  </>,
                ]}
              />
            </Section>
            <Section header="Telekinesis">
              <EntanglementDescription
                intro={<p>You can lift and move large objects with your mind.</p>}
                ranks={[
                  <>
                    <p>You can induce the Move Object cascade event.</p>
                    <p>
                      Move Object: You levitate an unattended non-living object. You can cause this object to move at a
                      rate of 1 meter per round. You may continue levitating it for the rest of the scene, unless you
                      take Stress from an attack or are otherwise forced to lose concentration.
                    </p>
                    <p>
                      At this rank, you can levitate up to 3 kilograms per point of Progress used to induce the event.
                    </p>
                  </>,
                  <>
                    <p>
                      You can now levitate up to 30 kilograms per point of Progress used to induce the Move Object
                      event.
                    </p>
                    <p>You can choose to levitate yourself instead of an object.</p>
                  </>,
                  <>
                    <p>You can levitate up to 300 kilograms per point of Entanglement you spend.</p>
                    <p>
                      You can choose to levitate a living target within a range of meters equal to your total ranks
                      within the Gravitonertia style. If this target is not willing, it can react with Flight + Self as
                      if this were an attack. You must create more Progress than the reaction does to levitate the
                      target.
                    </p>
                  </>,
                ]}
              />
            </Section>
          </Section>
          <Section header="Chromodynamism" isOpenAtDepth={4}>
            <p>
              The Chromodynamism Style contains the entanglements Chromaception, Condense Matter, Entropic Combat and
              Transmute Matter.
            </p>
            <p>
              These Entanglements are focused on manipulating the strong nuclear force, allowing you to selectively bind
              and unbind quarks in protons, effectively creating, transmuting, or destroying elements. If you have any
              ranks in this style, you can induce the Entropic Attack
              <Crosslink target={topics.CASCADE_EVENT}>cascade event</Crosslink> as a{" "}
              <Crosslink target={topics.ACTION}>normal action</Crosslink>.
            </p>
            <p>
              Entropic Attack: You touch a target and it begins to decay and destabilize at an atomic level. Humans thus
              afflicted experience internal hemorrhaging, abraded flesh, and decaying bones.
            </p>
            <p>
              The amount of <Crosslink target={topics.PROGRESS}>Progress</Crosslink> used to induce this
              <Crosslink target={topics.CASCADE_EVENT}>event</Crosslink> determines the duration of its effects. Before
              metabolisms refresh at the end of each round, including the current one, the target takes a point{" "}
              <Crosslink target={topics.STRESS}>Stress</Crosslink> to all physical metabolisms with a current maximum
              above 1. The remaining duration then decreases by one and the effect stops if it reaches 0. You can
              dismiss this effect at any moment. A target affected by an entropic attack cannot be healed by medical
              attention or cascade events. A target cannot be affected by more than a single entropic attack at once.
              Entropic attacks ignore armor, reactions, and any other protection that may reduce damage dealt. At the
              end of combat, an affected target can catch their breath and move carefully in order to ignore any
              remaining duration.
            </p>
            <Section header="Chromaception">
              <EntanglementDescription
                intro={
                  <p>
                    The "sixth sense" of chromaception is minimally present in all people, but with this entanglement
                    you can refine it to grant you incredible situational awareness by feeling the chromodynamic wakes
                    that physical objects impart on hidden space.
                  </p>
                }
                ranks={[
                  <p>
                    You gain reliable chromaception within a number of meters equal to your Far score. This sense can
                    detect the rough shape and position of everything, but cannot discern texture, color, small shapes,
                    or anything that is currently moving faster than a slow walk.
                  </p>,
                  <>
                    <p>
                      You can sense the rough shape of everything in range of your chromaception regardless of darkness
                      or blindness. You are aware of the postition of any sublimed objects or physical bodies in range.
                      At this rank, line of sight still applies similar to vision.
                    </p>
                    <p>
                      Your chromaception now ignores line of sight. You know the position of things that are completely
                      hidden.
                    </p>
                  </>,
                  <p>
                    If you take a minute to focus, your chromaception can now discern small surface details like
                    writing, moving objects or people, and the internals of objects complex objects. You can also sense
                    hidden body entities and people that have sublimed only their senses.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Condense Matter">
              <EntanglementDescription
                intro={
                  <>
                    <p>
                      This entanglement allows you to induce the non-combat cascade event Alter Material to create solid
                      objects out of thin air. Each point of progress used to induce this event can affect an amount of
                      material equal to a sphere with a diameter of 10 centimeters. The maximum amount of points you can
                      spend this way is 1 per rank you have in the Chromodynamism style.
                    </p>
                    <p>
                      With this entanglement alone, you cannot control the shape of this material more precisely than
                      making a rough sphere and you can only create single chemical elements. For example, you could
                      create oxygen or carbon, but not carbon dioxide. You cannot create any element that would
                      immediately react violently with itself, the atmosphere, or its immediate surroundings.
                    </p>
                    <p>
                      The entanglement Transmute Matter also grants the Alter Material event. If you have ranks in both
                      entanglements you can combine their effects into a single usage of this event, allowing you to
                      create and shape more complex materials in any state at the same time.
                    </p>
                  </>
                }
                ranks={[
                  <p>
                    Your Alter Material events can condense ambient gasses into any homogenous liquid or solid element.
                  </p>,
                  <p>
                    Your Alter Material events can skim the virtual particles out of an absolute vacuum and condense
                    them into any homogeneous solid, liquid, or gas. Gasses created this way immediately disperse if
                    they are not contained in some way.
                  </p>,
                  <p>Your Alter Material events can be used to instantly destroy a one meter sphere of matter.</p>,
                ]}
              />
            </Section>
            <Section header="Entropic Combat">
              <EntanglementDescription
                intro={
                  <p>
                    This entanglement improves your ability to utilize Entropic Attack events in tactical situations.
                  </p>
                }
                ranks={[
                  <>
                    <p>
                      Your Entropic Attack no longer requires you to touch the target and instead have a range equal to
                      your rank in this entanglement plus 1.
                    </p>
                    <p>
                      Additionally, your entropic attacks deal a point of Stress to all physical metabolisms immediately
                      upon being applied.
                    </p>
                  </>,
                  <p>
                    Your Entropic Attacks can no longer be ignored outside of combat and any Strenuous Challenge the
                    target attempts while affected is also Stressful.
                  </p>,
                  <p>
                    Your Entropic Attack now deals damage even to metabolisms with the maximum reduced to 0, potentially
                    causing injuries or death.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Transmute Matter">
              <EntanglementDescription
                intro={
                  <>
                    <p>
                      This entanglement allows you to induce the non-combat cascade event Alter Material to transform
                      any unattended non-living material you touch. Each point of progress used to induce this event can
                      affect an amount of material equal to a sphere with a diameter of 10 centimeters. The maximum
                      amount of points you can spend this way is 1 per rank you have in the Chromodynamism style.
                    </p>
                    <p>
                      With this entanglement alone, any material you transform with this event must remain in the same
                      state (solid, liquid, or gas) it was originally in. You cannot create any substance that would
                      immediately react violently with itself or the atmosphere.
                    </p>
                    <p>
                      The entanglement Condense Matter also grants the Alter Material event. If you have ranks in both
                      entanglements you can combine their effects into a single usage of this event, allowing you to
                      create and shape more complex materials in any state at the same time.
                    </p>
                  </>
                }
                ranks={[
                  <p>
                    Your Alter Material events can transform any homogeneous compound into any other homogeneous
                    compound. For example, you could turn water into gasoline, or salt into iron. When transmuting solid
                    objects, you can reshape them into any shape with features no smaller than a centimeter.
                  </p>,
                  <p>
                    Your Alter Material events can transform any composite material into any other composite material.
                    For example, you could turn wood into surface-hardened metal alloys. When transmuting solid objects,
                    you can reshape them into any shape including small features and sharp edges.
                  </p>,
                  <p>
                    Your Alter Material events can transform any substance into any other with enough control over the
                    shape and structure to create moving parts and functional machines. The only restriction is that you
                    can only create objects that you know how to create by mundane means. For example, if you had the
                    Trait Mechanic you could turn a block of wood into a functional engine complete with fuel.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Create Condensate">
              <EntanglementDescription
                intro={
                  <>
                    <p>
                      This entanglement allows you to induce Create Condensate, a cascade event that requires 8
                      uniterupted hours of work and focus to complete.
                    </p>
                    <p>
                      Create Condensate: Over the course of 8 hours you slowly accrete a small amount of color glass
                      condensate, a type of solid quark matter. This material is not composed of atoms, but rather it is
                      a single macroscopic hadron, a dense mass of many quarks bound together by the strong nuclear
                      force. As such, its a mirror-like smoothness is practically indestructable to things made of
                      regular matter. Armor made of color glass provides an extra point of protection when compared to
                      armor of a similar weight. With each event you can create a new object or increase the size of an
                      existing one, but these objects cannot be further worked or shaped by any other means.
                    </p>
                  </>
                }
                ranks={[
                  <p>
                    The amount of color glass condensate created by a single 8 hour usage of Create Condensate is a
                    equal to a number of cubic centimeters equal to the amount of progress used to induce the event. You
                    only have rough control over the shape of the object created and cannot make small parts or sharp
                    edges.
                  </p>,
                  <p>
                    You have finer control over the shape of created objects, including small parts and edges sharp
                    enough to make bladed weapons that deal an extra point of threat. You cannot make machines with
                    moving parts, but you could make components of them to assemnble later.
                  </p>,
                  <p>
                    You can create color glass monofilament wire. Each use of Create Condensate can create a meter of
                    monofilament per point of progress created instead of a solid cubic centimeter. Monofilament color
                    glass is almost invisibly fine and if held taut can cut through almost anything. A trap made of
                    tightly stretched monofilament could easily sever the limbs of someone attempting to run through it.
                    Making wire thin enough to gain this cutting property makes it too thin to remain indestructible,
                    and therefore it will break and become useless after being used to cut something once.
                  </p>,
                ]}
              />
            </Section>
          </Section>
        </Section>
      </Section>

      <Section header="Far Entanglements">
        <p>
          The Entanglements associated with the <Metabolism far /> metabolism are grouped into the Intuitive Styles
          Sharp, Quick, and Alert, and the Esoteric Styles Evocation, Pneumaplegia, or Telethesia.
        </p>
        <p>These styles are concerned with ranged combat, senses, acting over distances, and making predictions.</p>
        <Section header="Core Entanglement: Danger Sense" isOpenAtDepth={4}>
          <EntanglementDescription
            ranks={[
              <>
                <p>
                  Increase your <Metabolism far /> Metabolism score by 1.
                </p>
                <p>
                  You can now buy Entanglements within the 6 styles associated with the <Metabolism far /> metabolism.
                </p>
                <p>
                  In a <Crosslink target={topics.REACTION}>reaction</Crosslink> to a ranged attack, the first point of{" "}
                  <Metabolism far /> you spend produces an extra amount of{" "}
                  <Crosslink target={topics.PROGRESS}>Progress</Crosslink> equal to your rank in this Entanglement.
                </p>
              </>,
              <>
                <p>
                  Increase your <Metabolism far /> Metabolism score by 1.
                </p>
                <p>
                  Any time you use a <Crosslink target={topics.RISKY}>risky</Crosslink> action to take cover or hide,
                  when a die rolled comes up as a 6 you can skip rerolling it to select a target that can now no longer
                  target you with
                  <Crosslink target={topics.ATTACK}>attacks</Crosslink> until you or the target move more than a meter.
                </p>
              </>,
              <>
                <p>
                  Increase your <Metabolism far /> Metabolism score by 1.
                </p>
                <p>
                  In any <Crosslink target={topics.ATTACK}>attack</Crosslink> you make, when a die rolled comes up as a
                  6 you can skip rerolling it now in order to add 2 extra dice to the next attack you make or 2 extra{" "}
                  <Crosslink target={topics.PROGRESS}>Progress</Crosslink> to the next{" "}
                  <Crosslink target={topics.REACTION}>reaction</Crosslink> you make.
                </p>
              </>,
            ]}
          />
        </Section>
        <Section header="Intuitive Far Entanglements" isOpenAtDepth={4}>
          <Section header="Sharp Style" isOpenAtDepth={4}>
            <p>
              The Sharp Style contains the Entanglements Disentangle, Pierce, Precision, Ranged Mastery, and Stealth
              Strike.
            </p>
            <p>
              These Entanglements are focused on ranged attacks, sudden bursts of damage, and making the most of
              critical hits.
            </p>
            <Section header="Disentangle">
              <EntanglementDescription
                intro={<p>You can assault a target's connection to their hidden body directly.</p>}
                ranks={[
                  <p>
                    You can induce the cascade event Disentangle. Inducing it is a Risky challenge and it can target
                    anyone within a range equal to your Far score. The target can use a reaction and it's unaffected if
                    the reaction ties or beats the event in Progress. Affected targets take 1 Stress to every hidden
                    metabolism with a current value above 1.
                  </p>,
                  <>
                    <p>
                      If a Successfully affected target has no hidden metabolism scores, your Disentangle event
                      immediately renders them unconscious for a number of minutes equal to the event's Progress.
                    </p>
                  </>,
                  <>
                    <p>
                      If a target affected by your Disentangle event doesn't have any hidden metabolisms with a current
                      maximum above 1, the target is rendered unconscious for a number of minutes equal to the event's
                      Progress.
                    </p>
                    <p>
                      If an affected target is fully in hidden space, your Disentangle event forces it out of it. If it
                      has a physical body elsewhere it returns to the body, if it has a sublimed physical body it
                      returns to physical space in its current location at the start of the next round, if it has no
                      physical body it is unaffected.
                    </p>
                  </>,
                ]}
              />
            </Section>
            <Section header="Pierce">
              <EntanglementDescription
                intro={<p>You can make the most from the trajectory of a single attack.</p>}
                ranks={[
                  <p>The targets of your ranged attacks cannot benefit from cover.</p>,
                  <p>
                    When making a ranged attack, you may target a line starting at your space instead of a single
                    target. You may choose how to divide the Threat generated by the attack between all targets on this
                    line.
                  </p>,
                  <p>
                    When targeting a line with a ranged attack, all targets on the line are dealt the full Threat of the
                    attack.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Ranged Mastery">
              <EntanglementDescription
                intro={
                  <p>
                    You can rapidly calculate vectors to any target you perceive, and you can continue to focus on
                    aiming despite complications.
                  </p>
                }
                ranks={[
                  <p>
                    You gain the Trait Ranged Mastery, this Trait is relevant any time you attempt to make an attack
                    with a melee weapon.
                  </p>,
                  <p>
                    For each ranged attack you make, you can choose to target it lethally for it to deal 1 extra threat
                    as if it were a bladed weapon, or you can choose to target it as suppressing fire to target Focus as
                    if it were a blunt weapon.
                  </p>,
                  <p>
                    You can add Focus as a third metabolism to the metabolism pairing used to make an attack with a
                    ranged weapon.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Stealth Strike">
              <EntanglementDescription
                intro={
                  <p>
                    When you opponent is unable to properly defend against you, you can intuitively sense their weak
                    points and guide your strike towards it.
                  </p>
                }
                ranks={[
                  <p>
                    Whenever you are able to <Crosslink target={topics.ADVANTAGE}>Find an Advantage</Crosslink> to
                    adjust the
                    <Crosslink target={topics.COMPLICATION}>Complications</Crosslink> of your attack, you also deal 1
                    extra point of
                    <Crosslink target={topics.THREAT}>Threat</Crosslink> per rank you have in this Entanglement.
                  </p>,
                  <p>
                    Any time you attack a target that is adjacent to one of your allies, you can
                    <Crosslink target={topics.ADVANTAGE}>Find an Advantage</Crosslink> and therefore also apply the
                    extra
                    <Crosslink target={topics.ADVANTAGE}>Threat</Crosslink> granted by this Entanglement.
                  </p>,
                  <p>
                    Any time you apply extra <Crosslink target={topics.ADVANTAGE}>Threat</Crosslink> from this
                    entanglement, you may also ignore the target's armor.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Suppress">
              <EntanglementDescription
                intro={
                  <p>
                    You can effectively threaten areas by making it clear to anyone that they will be punished for
                    entering the area.
                  </p>
                }
                ranks={[
                  <p>
                    As a normal action, you can suppress an area within range of a melee or ranged attack. Make the
                    normal Challenge you would do to use this attack but instead of attacking, you designate a number of
                    adjacent spaces equal to the Progress induced as suppressed. The area remains suppressed until your
                    next turn. Any time someone enters or starts a turn in one of your suppressed spaces, you may use a
                    reaction to attack them as if you were taking a normal action. Targets currently in cover are immune
                    to this, but you may attack them if they leave cover inside the suppressed area.
                  </p>,
                  <p>
                    Once per round when attacking as a reaction to a target in the suppressed area, you may skip the
                    normal attack Challenge and instead deal an amount of Threat equal to the amount you used to create
                    the suppressed area. Additionally, the area remains suppressed until you leave your current space.
                  </p>,
                  <p>
                    You may use the free of Rank 2 any number of times per round instead of once. Additionally, the area
                    remains suppressed until you take an action to move, any other movement does not end the effect.
                  </p>,
                ]}
              />
            </Section>
          </Section>
          <Section header="Quick Style" isOpenAtDepth={4}>
            <p>The Sharp Style contains the Entanglements Multitasking, Ranged Defense, Precognition, and Priority.</p>
            <p>
              These Entanglements are focused on ranged defense, thinking fast, and manipulating the flow of initiative.
            </p>
            <Section header="Multitasking">
              <EntanglementDescription
                intro={
                  <p>
                    By taking advantage of the conscious mutability of the hidden body, the simple brain-state mirror it
                    keeps can be given extra cognitive resources, giving one the equivalent to a second brain and a
                    great ability to parallelize tasks.
                  </p>
                }
                ranks={[
                  <>
                    <p>
                      You can focus on multiple tasks at one time. The exact limits of this are up to the GM, but it
                      includes making multiple skill rolls simultaneously, doing unrelated physical tasks with both
                      hands, or even participating in combat while solving another problem.
                    </p>
                    <p>
                      You can mix melee and ranged targets when attacking with a weapon in each hand, even if you
                      couldn't otherwise.
                    </p>
                  </>,
                  <>
                    <p>You cannot be the target of Stealth Attacks caused by being surrounded by multiple enemies.</p>
                    <p>
                      As a full action, you can focus on all your attackers at once. After doing so, resolve a challenge
                      as if you were reacting to an attack. Until your next turn you may use the results of this
                      challenge to react to all attackers.
                    </p>
                  </>,
                  <p>
                    Any time you use a reaction against being attacked, you may forgo the free meter of movement and
                    instead make a simultaneous attack as a free action. You still must resolve this attack as a normal
                    Challenge.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Ranged Defense">
              <EntanglementDescription
                intro={
                  <p>
                    Your tactical predictions about where ranged threats are coming from greatly protect you from harm.
                  </p>
                }
                ranks={[
                  <p>
                    When reacting to a ranged attack, after applying your Danger Sense bonus to the first point of Far
                    you spend, you can apply the same bonus to a number of additional points of far equal to your rank
                    in this entanglement.
                  </p>,
                  <p>
                    Gain the trait Ranged Tactics. This trait is relevant any time you are reacting to a ranged attack
                    and while you're determining initiative
                  </p>,
                  <p>Ranged attacks targeting you do not reroll 6s.</p>,
                ]}
              />
            </Section>
            <Section header="Precognition">
              <EntanglementDescription
                intro={
                  <p>
                    Your predictive abilities are so rapid and accurate that it seems like you can see the near future.
                  </p>
                }
                ranks={[
                  <p>
                    You can always act in a surprise round, regardless of circumstances. You cannot be the target of
                    Stealth Attacks caused by being unaware of an enemy.
                  </p>,
                  <p>
                    On your turn, you can designate an enemy to focus your predictive skills on. Until you choose a new
                    enemy, your Reaction to any attack this target makes is Controlled.
                  </p>,
                  <p>
                    Outside of combat, you have a vague sense of what might happen in the next few minutes. Once per
                    scene, you can ask the GM for information on what is about to happen. How much information you are
                    given is up to the GM, but the information is accurate until the circumstances change significantly.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Priority">
              <EntanglementDescription
                intro={<p>Your fast reactions let you take more turns at more advantageous times in combat.</p>}
                ranks={[
                  <p>
                    When combat starts, you may choose to have two turns instead of one. Make two separate challenges to
                    determine the place of your two turns in the initiative order.
                  </p>,
                  <p>
                    When determining the initiative order of your two turns, you may determine one turn's place with a
                    Challenge as usual and then decide when the other turn occurs after seeing everyone else's turn
                    order.
                  </p>,
                  <p>
                    When determining initiative order, you may choose when both of your turns occur after seeing
                    everyone else's turn order.
                  </p>,
                ]}
              />
            </Section>
          </Section>
          <Section header="The Alert Style" isOpenAtDepth={4}>
            <p>
              The Sharp Style contains the Entanglements Cold Reading, Detect Sensorium, Distant Healing, Tactical
              Awareness.
            </p>
            <p>These Entanglements are focused on sensing your surroundings in new ways.</p>
            <Section header="Cold Reading">
              <EntanglementDescription
                intro={<p>You can read people like a book with a single glance.</p>}
                ranks={[
                  <p>
                    When interacting with someone you always know what their true opinion of you is or what their
                    current intent is.{" "}
                  </p>,
                  <p>
                    You always know immediately if someone is lying, whether directly or by omission, or attempting to
                    deceive you in any other way.
                  </p>,
                  <p>
                    Once per turn, you may ask the GM what action a single target is going to take on their next turn.
                    This prediction is accurate unless the combat situation changes greatly before then.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Detect Sensorium">
              <EntanglementDescription
                intro={
                  <p>
                    Observation leaves an impression on the chromodynamic wakes of objects in hidden space. As your
                    hidden boy reaches out over distances it can detect these impressions, granting you an awareness of
                    what others perceive.
                  </p>
                }
                ranks={[
                  <p>You know at all times if anyone can currently see you.</p>,
                  <p>
                    You know the presence and location of all video cameras, audio recorders, motion sensors, or similar
                    devices within a number of meters equal to your Far score.
                  </p>,
                  <p>
                    You can tell at all times exactly what spaces are currently being observed and their likelihood of
                    being observed in the next round.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Distant Healing">
              <EntanglementDescription
                intro={
                  <>
                    <p>
                      Effectively healing the physical body requires abilities from multiple Styles. The Entanglements
                      Rapid Healing, Healing Field, and Distant Healing all grant you the ability to induce the Heal
                      cascade event and add different improvements to the event. This event can only target you or
                      anyone you touch and the amount of Progress gained while inducing it equals the amount of Stress
                      removed from a single physical metabolism. This healing cannot bring a metabolism's current
                      maximum above a number equal to the sum of your total ranks in the 3 Entanglements that grant this
                      event.
                    </p>
                    <p>
                      This entanglement in particular is focused on making the Heal cascade event heal wounds from a
                      distance.
                    </p>
                  </>
                }
                ranks={[
                  <>
                    <p>You can induce the Heal cascade event if you couldn't already.</p>
                    <p>
                      Instead of touching the target, you can target anyone with this event that is within a number of
                      meters equal to the sum of your ranks in this entanglement, Healing Field, and Rapid Healing.
                    </p>
                  </>,
                  <p>
                    If injury or dissociation is preventing consciousness or a normal mental state, the target awakens
                    and returns to a normal mental state even if the healing was insufficient to remove the injury or
                    dissociation.
                  </p>,
                  <p>
                    The range you can target your Heal events within expands by a number of meters equal to your Far
                    score.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Investigation">
              <EntanglementDescription
                intro={<p>You can get to the bottom of any mystery.</p>}
                ranks={[
                  <p>
                    Once per session, when you have enough downtime to research a topic, you may ask the GM any one
                    question that you could plausibly have found the answer to in this time. The GM must answer
                    correctly.
                  </p>,
                  <p>When talking with someone else, you can always tell if they know something you want to know.</p>,
                  <p>
                    Once per session, you can find a clue towards any plot. This clue is specific to the current context
                    and your location. It may not explain the bigger picture, but it will always guide you to what you
                    need to do next.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Sharp Senses">
              <EntanglementDescription
                intro={<p>This entanglement boosts the power of your existing senses to incredible levels. </p>}
                ranks={[
                  <p>
                    You can read lips of anyone you can see. You can understand small print and whispers within a number
                    of meters equal to your Far score multiplied by your rank in this entanglement.
                  </p>,
                  <p>You can track someone by scent alone. Enemies cannot approach you via stealth.</p>,
                  <p>
                    On any challenge that primarily determines if you notice something, you automatically succeed
                    without spending metabolisms or taking stress.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Tactical Awareness ">
              <EntanglementDescription
                intro={
                  <p>
                    This entanglement ensures that you are always instinctively aware of all of the details about your
                    surroundings, even in chaotic situations.
                  </p>
                }
                ranks={[
                  <p>
                    You always know the location of any enemy in combat. They cannot sneak away from you or hide their
                    position.
                  </p>,
                  <>
                    <p>You can discern the exact current and maximum metabolism values of anyone you can see.</p>
                    <p>
                      You have an instinctive awareness of combat situations and immediately know if an enemy has
                      flanked or gotten behind the cover of you or an ally, even if you cannot otherwise perceive the
                      enemy.
                    </p>
                  </>,
                  <p>
                    Any time an enemy gets behind your cover, you can instantly make an attack as a free action if they
                    are within range of a ranged weapon in your hand.
                  </p>,
                ]}
              />
            </Section>
          </Section>
        </Section>
        <Section header="Esoteric Far Entanglements" isOpenAtDepth={4}>
          <p>
            The esoteric Entanglements associated with the Far metabolism are contained in the Styles Evocation,
            Pneumaplegia, or Telethesia. They are unlocked by the Far core entanglement Danger Sense.
          </p>
          <p>
            These styles are concerned with long range energy attacks, manipulating space, and extra sensory perception.
          </p>
          <Section header="Evocation" isOpenAtDepth={4}>
            <p>The Evocation Style contains the Entanglements Annihilate, Blast Radius, and Combat Evocation.</p>
            <p>
              These entanglements allow you to attack your enemies by creating a runaway cascade effect and discharging
              it on them in a torrent of energy. If you have ranks in any of this style, you can induce the Evocation
              Attack cascade event as a full action.
            </p>
            <p>
              Evocation Attack: Blast a target within a range of 3 plus the sum of your total ranks in the Evocation
              Style. This attack deals Threat equal to the amount of Progress used to create it plus the sum of your
              total ranks in the Evocation Style. It can be reacted to with Flight + Far.
            </p>
            <p>
              You cannot be hurt by your own evocation attacks, but an ally can be. You can choose the cosmetic form
              these attacks take, but they cannot be done discreetly and are loud, overtly visible, and impossible to
              hide.
            </p>
            <Section header="Annihilate">
              <EntanglementDescription
                intro={
                  <p>
                    You can selectively sublimate half of the virtual particles normally created by an Evocation Attack
                    into hidden space, creating a small amount of antimatter which annihilates on impact, increasing the
                    damage output of Evocation Attacks.
                  </p>
                }
                ranks={[
                  <p>
                    You can intentionally take additional Stress to your metabolism pairing when inducing an Evocation
                    Attack. For each point taken, increase the Threat the attack deals by your rank in this
                    entanglement.
                  </p>,
                  <p>
                    Inducing an Evocation Attack is now a Controlled Challenge, allowing you to spend more Metabolism
                    points on empowering it.
                  </p>,
                  <p>Double the amount of Progress created when using an Evocation Attack.</p>,
                ]}
              />
            </Section>
            <Section header="Blast Radius">
              <EntanglementDescription
                intro={<p>Your Evocation Attack events affect a larger area.</p>}
                ranks={[
                  <p>
                    Everything within a 1 meter radius of the target of your Evocation Attack is dealt the same amount
                    of Threat as the target.
                  </p>,
                  <p>
                    Everything within a 3 meter radius of the target of your Evocation Attack is dealt the same amount
                    of Threat as the target.
                  </p>,
                  <p>
                    Everything within a 9 meter radius of the target of your Evocation Attack is dealt the same amount
                    of Threat as the target.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Combat Evocation">
              <EntanglementDescription
                intro={<p>You are a master of using Evocation Attacks in tactical situations.</p>}
                ranks={[
                  <p>
                    The range of your Evocation Attack doubles, and you may choose for them to ignite any flammable
                    materials they strike.
                  </p>,
                  <p>Your Evocation Attack even is now a normal action instead of a full action.</p>,
                  <>
                    <p>The range of your Evocation Attack increases to anything in your line of sight.</p>
                    <p>
                      Additionally, if you have ranks in Blast Radius you can sculpt the shape of the attack to only hit
                      the targets you choose in its affected area.
                    </p>
                  </>,
                ]}
              />
            </Section>
            <Section header="Evoke Thrust">
              <EntanglementDescription
                intro={<p>Your Evocation Attacks provide enough force to push the target around.</p>}
                ranks={[
                  <p>
                    You may push any target that is dealt Threat by one of your evocation attacks directly away from you
                    up to a number of meters equal to your rank in this entanglement. If this entanglement moves a
                    target into a solid obstacle, the challenge to resist the attack becomes Stressful.
                  </p>,
                  <p>
                    Instead of pushing a target, you may choose to pull it directly towards you the same distance. You
                    may also choose to make an evocation attack that can push or pull but deals no damage. Your
                    evocation attacks deal double damage to inanimate objects.
                  </p>,
                  <p>
                    You may choose if any target that is dealt Stress by your Evocation Attacks is knocked prone by the
                    attack. Standing up again is an action that may be combined with any movement action.
                  </p>,
                ]}
              />
            </Section>
          </Section>
          <Section header="Pneumaplegia" isOpenAtDepth={4}>
            <p>The Pneumaplegia Style contains the entanglements Chronoplegia, Halting Field and Hastening Field.</p>
            <p>
              These Entanglements allow you to create areas that have subtle but powerful hindering, stunning, and
              dissociative effects. These areas are hostile to the hidden body's proprioceptive capabilities, causing
              them to be inexplicably hard to navigate. If you have any ranks in the Pneumaplegia Style, you can induce
              the Mitigation Field cascade event.
            </p>
            <p>
              Mitigation Field: Both the duration of this event measured in rounds, and the size of it measured in
              contiguous one square meter spaces you choose, are equal to the Progress used to create the event.
            </p>
            <p>
              Affected spaces fill with a faint haze or other subtle visual effect. Anyone that enters or stays inside
              the affected area experiences nothing. However, the space cannot be exited as part of the free movement of
              an action. It can only be exited during an action taken to move, and exiting it has the same metabolism
              cost as traveling a number of meters equal to the sum of your ranks within this style.
            </p>
            <p>One person cannot trigger the same event more than once.</p>

            <Section header="Chronoplegia">
              <EntanglementDescription
                intro={
                  <p>
                    This entanglement allows you to create spaces where time flows at a noticeably different pace,
                    isolating its occupants.
                  </p>
                }
                ranks={[
                  <>
                    <p>You can induce the following cascade event.</p>
                    <p>
                      Isolation Field: You create an area that isolates its occupants from the flow of time and outside
                      influences. The duration and size of this area is the same as your Mitigation Field, but it has
                      very different effects.
                    </p>
                    <p>
                      Time outside of the event grinds to a halt while it continues to flow inside it. For the duration,
                      causality cannot cross the threshold of the event or interact with anyone unaffected by it. No
                      beings, objects, gasses, signals, objects in hidden space, or anything else can cross the
                      boundary. Anyone inside the event can exit it, however doing so immediately ends the event
                      completely.
                    </p>
                  </>,
                  <p>
                    The duration of your Mitigation Field, Hastening Field, and Isolation Field is now measured in
                    minutes instead of rounds.
                  </p>,
                  <>
                    <p>
                      The duration of your Mitigation Field, Hastening Field, and Isolation Field is now measured in
                      hours instead of minutes.
                    </p>
                    <p>
                      Additionally, any time someone enters or exits one of these events, you are immediately aware of
                      it, rousing you from sleep or distraction if necessary, regardless of where you are.
                    </p>
                  </>,
                ]}
              />
            </Section>
            <Section header="Halting Field">
              <EntanglementDescription
                intro={
                  <p>
                    This entanglement causes your Mitigation Field to stop people in their tracks, briefly trapping them
                    inside.
                  </p>
                }
                ranks={[
                  <p>
                    Anyone taking an action inside your Mitigation Field loses one Metabolism point of their choosing
                    per rank you have in this Entanglement.
                  </p>,
                  <p>
                    Anyone that enters your Mitigation Field must stop moving and immediately end their turn inside of
                    it.
                  </p>,
                  <p>
                    When creating Mitigation Field or Hastening Field you may choose if they have their normal hazy
                    appearance, or if they are vibrant and immediately noticeable, or if they are completely invisible.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Hastening Field">
              <EntanglementDescription
                intro={
                  <p>This entanglement allows you to create an area that boosts allies instead of hindering foes.</p>
                }
                ranks={[
                  <>
                    <p>
                      Your Mitigation Field and Hastening Field events are selective, you may choose who they do and do
                      not affect.
                    </p>
                    <p>You can also induce the following cascade event.</p>
                    <p>
                      Hastening Field: You create an area that has positive effects instead of negative ones. The
                      duration and size of this area is the same as your Mitigation Field. Each time someone starts a
                      turn inside your Hastening Field they can choose to regain any one spent metabolism point per rank
                      you have in this Entanglement.
                    </p>
                  </>,
                  <p>
                    Anyone in your Hastening Field regains metabolism points before each action they take inside the
                    field instead of before each turn.
                  </p>,
                  <p>
                    Whenever anyone inside your Hastening Field takes an action to move or uses the free movement of an
                    action, they can instantly move to any other space inside the event as if they were adjacent.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Refuge">
              <EntanglementDescription
                intro={
                  <p>This entanglement allows you to create an area that separates someone from the outisde world.</p>
                }
                ranks={[
                  <>
                    <p>You can also induce the following cascade event.</p>
                    <p>
                      Refuge: Choose a target person. They become enveloped in a haze that isolates them from the
                      outside world. They cannot be targeted by any physical attack for the rest of the scene. If they
                      make an attack action, the effects of this event end immediately.
                    </p>
                  </>,
                  <p>
                    Anyone affected by your Refuge event also cannot be targeted by any cascade event that targets a
                    single person. If they induce any cascade event themself, the effects of this event end immediately.
                  </p>,
                  <p>
                    You can choose to make your Refuge event difficult to exit. They are unable to take any action that
                    would end the event until after they have successfully completed a Strenuous Focus + Self challenge
                    that requires an action.
                  </p>,
                ]}
              />
            </Section>
          </Section>
          <Section header="Telesthesia" isOpenAtDepth={4}>
            <p>The Telethesia Style contains the entanglements Clairvoyance, Suggestion, and Telepathy.</p>
            <p>
              These Entanglements allow the diffuse bounds of the hidden body to reach out over distances to sense
              things and examine or influence minds. If you have any ranks in this style, you can induce the Silent
              Communication cascade event as a free action.
            </p>
            <p>
              Silent Communication: You enable telepathic communication between a number of willing participants equal
              to the sum of your ranks in the Telesthesia style. These participants stay in telepathic contact with you
              and each other for the rest of the scene. Different participants cannot be chosen without activating the
              effect again. Telepathic communication occurs at the same speed and bandwidth of normal speech, but it is
              undetectable to outsiders and does not require a shared language.
            </p>
            <p>
              The sum of your ranks in the Telesthesia style determines how close someone must be for you to include
              them in this communication. Any rank that does not require line of sight can be used to communicate
              between hidden and physical space.
            </p>
            <ol>
              <li>Touch is required.</li>
              <li>Within 1 meter, eye contact is required.</li>
              <li>Within 3 meters, eye contact is required.</li>
              <li>Within 30 meters, line of sight required.</li>
              <li>Within 30 meters.</li>
              <li>Within 300 meters.</li>
              <li>Within 3 kilometers.</li>
              <li>Within 30 kilometers.</li>
              <li>Within 300 kilometers.</li>
              <li>Within 3000 kilometers.</li>
              <li>On the same continent.</li>
              <li>In the same hemisphere.</li>
              <li>On the same planet.</li>
              <li>On or orbiting the same planet.</li>
              <li>Anywhere in the solar system. Speed of light delays apply.</li>
              <li>In an adjacent worldline.</li>
            </ol>
            <Section header="Clairvoyance">
              <EntanglementDescription
                intro={<p>You can sense what happens at distant locales regardless of any obstacles in the way.</p>}
                ranks={[
                  <>
                    <p>You can induce the non-combat cascade event Scry.</p>
                    <p>
                      Scry: For the next minute, you gain vision of a chosen location that would otherwise be hidden
                      from you. You must have previously seen this location normally at some point, and it must be
                      within a range of 1 kilometer per point of Progress used on the event, or the range of your Silent
                      Communication event, whichever is greater.
                    </p>
                  </>,
                  <p>
                    Your Scry event can target location within range, regardless of whether you have seen it before and
                    you gain all senses at this location for the next hour.
                  </p>,
                  <p>
                    You can sense what occurred in the past at the location you target with a Scry event. Choose one
                    hour period of time within a number of years equal to the Progress used on this event. You can sense
                    what occurred at this location during the chosen time.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Inhibit">
              <EntanglementDescription
                intro={<p>You can telepathically jam the language processing capabilities of other minds.</p>}
                ranks={[
                  <>
                    <p>You can induce the cascade event Inhibit language.</p>
                    <p>
                      Inhibit Language: Choose an adjacent area with a radius of 3 meters. For the rest of the scene,
                      anyone inside this area experiences great difficulty with comprehending and paying attention to
                      language. They may resist this effect with Self + Focus. If they fail, they cannot comprehend
                      spoken or written language or any other semiotic content. Ability to make noise, speak, or write
                      or not inhibited, only the ability to comprehend others. Exiting the bounds of the event restores
                      normal faculties.
                    </p>
                  </>,
                  <p>
                    Your Inhibit Language events have a radius in meters up to the number of points of progress used to
                    induce it. You can center it on yourself. You and anyone you choose are immune to its effects. Those
                    affected by the event and currently inside it now can no longer communicate coherent thoughts, via
                    speech, writing, or even telepathy.
                  </p>,
                  <p>
                    Your Inhibit Language events now also jam some signals propagating within the brain. While inside
                    the event, those affected by it cannot use Focus in any metabolism pairing.
                  </p>,
                ]}
              />
            </Section>
            <Section header="Suggestion">
              <EntanglementDescription
                intro={<p>You can attempt to temporarily exert influence over other minds.</p>}
                ranks={[
                  <>
                    <p>You can induce the non-combat cascade events Suggest and Control.</p>
                    <p>Suggest: You attempt to influence the mind of a single target that you can see.</p>
                    <p>The target can react to resist this event.</p>
                    <p>
                      The difference between the Progress created on the event and the reaction indicate how much
                      influence you gain over the target.
                    </p>
                    <p>
                      At this rank, you can stimulate a target's brain to briefly release a single specific
                      neurotransmitter. This will allow you to create in the target a basic emotion or vague sensation.
                      High degrees of success over your target can make this feeling extremely intense or evoke feelings
                      that radically differ from the target's current state.
                    </p>
                    <p>
                      Control: You seize control over simple nervous systems. At this rank, this event can only affect
                      animals with no hidden body, meaning all invertebrates and jawless fish. For the rest of the
                      scene, you can completely control all qualifying animals in a range of meters equal to the
                      Progress used to induce this event.
                    </p>
                  </>,
                  <p>
                    Your Suggest events can instill a suggestion in the target that they will have a hard time
                    resisting. Tying the target's reaction may only allow simple suggestions that they will not put much
                    effort into, while greatly beating the target may allow you to issue complex commands and orders
                    that the target is irresistibly compelled to follow. The more these suggestions differ from the
                    target's desires, the more successes you'll need to beat them by.
                  </p>,
                  <>
                    <p>
                      Your Suggest events can implant false memories into the target. The more complex and implausible
                      these memories are, the more you'll need to beat their reaction by. Just tying it may only lead to
                      instilling them with a vague deja vu, while beating them by several points may allow you to
                      rewrite a short phase of their life.
                    </p>
                    <p>Additionally, your Control events can affect all non-humanoid animals.</p>
                  </>,
                ]}
              />
            </Section>
            <Section header="Telepathy">
              <EntanglementDescription
                intro={<p>You can discern the thoughts and memories of others.</p>}
                ranks={[
                  <>
                    <p>
                      At all times, you can sense the presence of any humanoid minds within a number of meters equal to
                      the sum of your ranks in Telesthesia styles, even if they are in hidden space
                    </p>
                    <p>Additionally, you can induce the non-combat cascade event Read Mind.</p>
                    <p>
                      Read Mind: Choose a target you can see. The target can use a reaction to resist this. If you beat
                      their reaction you gain some insight into their mind.
                    </p>
                    <p>
                      At this rank, if you beat the target's reaction, you become aware of their vague state of mind,
                      general emotional state, and stress level for the rest of the scene.
                    </p>
                  </>,
                  <p>
                    If you successfully affect a target with a Read Mind event, you become aware of the target's entire
                    internal monologue for the rest of the scene.
                  </p>,
                  <p>
                    If you successfully affect a target with a Read Mind event, you can read some of their memories. The
                    more you beat the target, the deeper the memories you can access. Recent memories are easy to access
                    even on a tie, older memories require them to fail by at least 2, and a deep dark secret by at least
                    4.
                  </p>,
                ]}
              />
            </Section>
          </Section>
        </Section>
      </Section>
      <Break page />
    </Section>
  );
}

export default Chapter6;
